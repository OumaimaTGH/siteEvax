import {Table, Tag, Badge, Input ,Button, InputNumber, Popconfirm, Form, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import {  useDispatch, useSelector } from 'react-redux';
import JournéesPOCreateForm from '../Components/ajout_admin/AjoutJournéesPO'
import { Create, DeleteOpenDay, FindAll } from '../redux/actions/OpenDayAction';


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

const JournéesPortesOuvertes = (props) => {
  
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  const openDays = useSelector(state => state.openDays)
  const errors = useSelector((state) => state.errors);
  useEffect(async () => {
    await dispatch(FindAll())
 
   
   
 }, [openDays])

  const onCreate = (values) => {
    dispatch(Create(values, setVisible))
    
  };

  const [form] = Form.useForm();
  const [data, setData] = useState([]);
  const [editingKey, setEditingKey] = useState('');



  const edit = (record) => {
    form.setFieldsValue({
      gouvernorat: '',
      municipalité: '',
      nom_centre: '',
      ...record,
    });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey('');
  };

  const columns = [
    {
      title: 'CENTRES DE VACCINATION',
      key: ['center','name'],
      dataIndex: ['center','name'],
      editable: true,
    },
    {
      title: " DATE ",
      dataIndex: 'date',
      key: 'date',
      editable: true,
    },

   /*  {title: 'MODIFIER',
     key: 'modifier_journée',
     dataIndex: 'modifier_journée',
      
      render: (_, record) => {
        
        return  (
          <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
            Modifier
          </Typography.Link>
        );
      },
    }, */
    {title: 'SUPPRIMER',
          key: 'supprimer_journée',
          dataIndex: 'supprimer_journée',
          render: (_, record) => (
            <>
            <Button
              type="primary"
              danger
              onClick={() => {
                dispatch(DeleteOpenDay(record._id));
              }}
            >
              Supprimer
            </Button>
          </>),
    },
  ];

  return (
    <Form form={form} component={false}>
       <Button type="ajouter"    onClick={() => {
          setVisible(true);
        }}
        danger>
       Ajouter une Journée portes ouvertes 
    </Button>
    <JournéesPOCreateForm
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
        errors={errors}
      />
      <h1> List des Journées portes ouvertes  </h1>
     
      <Table
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        bordered
        dataSource={openDays.all}
        columns={columns}
        rowClassName="editable-row"
        pagination={{
          onChange: cancel,
        }}
      />
    </Form>
  );
};



export default JournéesPortesOuvertes;
