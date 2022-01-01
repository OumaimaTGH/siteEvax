import {Table, Tag, Badge, Input ,Button, InputNumber, Popconfirm, Form, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getRendezvous } from '../redux/actions';
import RendezvousCreateForm from '../Components/ajout_admin/AjoutRendezvous'

const originData = [];
for (let i = 0; i < 100; i++) {
  originData.push({
    key: i.toString(),
    name: `Edrward ${i}`,
    age: 32,
    address: `London Park no. ${i}`,
  });
}

const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

const RendezVous = (props) => {
  const { rendezVous, getRendezvous } = props;
  useEffect(() => {
    // #Issue Birden fazla istek gidiyor
    getRendezvous();
  }, []);
  const [visible, setVisible] = useState(false);

  const onCreate = (values) => {
    console.log('Received values of form: ', values);
    setVisible(false);
  };

  const [form] = Form.useForm();
  const [data, setData] = useState(originData);
  const [editingKey, setEditingKey] = useState('');

  const isEditing = (record) => record.key === editingKey;

  const edit = (record) => {
    form.setFieldsValue({
      prénom: '',
      nom: '',
      email: '',
      gender:'',
      numéro_de_téléphone:'',
      code_inscription:'',
      date_de_vaccination:'',
      ...record,
    });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey('');
  };

  const save = async (key) => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex((item) => key === item.key);

      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        setData(newData);
        setEditingKey('');
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey('');
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };

  const columns = [
    {
      title: 'PRÉNOM',
      dataIndex: 'prénom',
      key: 'prénom',
      editable: true,
    },
    {
      title: 'NOM',
      dataIndex: 'nom',
      key: 'nom',
      editable: true,
    },
    {
      title: 'E-Mail',
      dataIndex: 'email',
      key: 'email',
      editable: true,
    },
    {
      title: 'Genre',
      dataIndex: 'gender',
      key: 'gender',
      editable: true,
    },
    {
      title: 'NUMÉRO DE TÉLÉPHONE',
      dataIndex: 'numéro_de_téléphone',
      key: 'numéro_de_téléphone',
      editable: true,
    },
    {
      title: 'CODE INSCRIPTION',
      dataIndex: 'code_inscription',
      key: 'code_inscription',
      editable: true,
    },
    {
      title: 'DATE DE VACCINATION',
      dataIndex: 'date_de_vaccination',
      key: 'date_de_vaccination',
      editable: true,
    },
    
    {title: 'MODIFIER',
    key: 'modifier_rendez_vous',
     dataIndex: 'modifier_rendez_vous',
      
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Typography.Link
              onClick={() => save(record.key)}
              style={{
                marginRight: 8,
              }}
            >
              Save
            </Typography.Link>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
            Modifier
          </Typography.Link>
        );
      },
    },
    {title: 'SUPPRIMER',
          key: 'supprimer_rendez_vous',
          dataIndex: 'supprimer_rendez_vousn',
          render: (supprimer_rendez_vous) => (
            <>
            <Button type="primary" danger>
            Supprimer
            </Button>
            </>),
    },
  ];
  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.dataIndex === 'age' ? 'number' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });
  return (
    <Form form={form} component={false}>
      <Button type="ajouter"  onClick={() => {
          setVisible(true);
        }} danger>
       Ajouter Un Rendez-Vous 
    </Button>
    <RendezvousCreateForm
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
      />
      <h1> List des rendez-vous </h1>
      <Table
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        bordered
        dataSource={data}
        columns={mergedColumns}
        dataSource={rendezVous} 
        rowClassName="editable-row"
        pagination={{
          onChange: cancel,
        }}
      />
    </Form>
  );
};

const mapStateToProps = (state) => {
  return {
    rendezVous: state.rendezVous,
  };
};

export default connect(mapStateToProps, { getRendezvous })(RendezVous);
