import {
  Table,
  Tag,
  Input,
  Button,
  InputNumber,
  Popconfirm,
  Form,
  Typography,
} from "antd";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CitizenCreateForm from "../Components/ajout_admin/AjoutCitizen";
import CitizenUpdateForm from "../Components/ajout_admin/UpdateCitizen";
import './login.css';

import {
  Create,
  DeleteCitizen,
  FindAll,
  UpdateCitizen,
  FindSingle,
  ConfirmAccount,
  ConfirmVaccin,
} from "../redux/actions/CitizenActions";
import selectors from "../Components/data.json";
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
  const inputNode = inputType === "number" ? <InputNumber /> : <Input />;
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

const Citizen = (props) => {
  const citizens = useSelector((state) => state.citizens);
  const auth = useSelector(state => state.auth)
  const errors = useSelector((state) => state.errors);
  const [citizen, setcitizen] = useState([]);
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [visibleUpdate, setvisibleUpdate] = useState(false);
  const onCreate = (values) => {
    dispatch(Create(values, setVisible));
  };
  const onUpdate = (values, id) => {
    dispatch(UpdateCitizen(values, id, setvisibleUpdate));
  };
  const [form] = Form.useForm();
  const [editingKey, setEditingKey] = useState("");

  const cancel = () => {
    setEditingKey("");
  };

  useEffect(() => {
    dispatch(FindAll());
    setcitizen(citizens.all);
  }, [citizens]);

  const columns = [
    {
      title: "Prénom",
      dataIndex: "firstname",
      key: "firstname",
      editable: true,
    },
    {
      title: "Nom",
      dataIndex: "lastname",
      key: "lastname",
      editable: true,
    },
    {
      title: "Tél",
      dataIndex: "phone",
      key: "phone",
      editable: true,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      editable: true,
    },
    {
      title: "Gouvernorat",
      dataIndex: "governorate",
      key: "governorate",
      editable: true,
    },
    {
      title: "Délegation",
      dataIndex: "delegation",
      key: "delegation",
      editable: true,
    },
    {
      title: "Municipalité",
      dataIndex: "municipality",
      key: "municipality",
      editable: true,
    },
    
    { 
      title: "Vaccinated",
      dataIndex: "vaccinated",
      key: "vaccinated",
      render: (_, record) => (
        <>
          <Button className="vacc"
            type="secondary"
            
            disabled={editingKey !== ""}
            onClick={() => {
              auth.user.role === "2" ? dispatch(ConfirmVaccin(record._id,record)): alert('seule l\'operateur qui peut confimé le vaccin')
            }}
          >
            {
              record.vaccinated ? 'Pfizer': 'non vacciné'
            }
          </Button>
        </>
      ),
    },
    {
      title: "CONFIRMÈ",
      key: "modifier_citizens",
      dataIndex: "modifier_citizens",
      render: (_, record) => (
        <>
          <Button className="vacc"
            type="secondary"
            
            disabled={editingKey !== ""}
            onClick={() => {
              dispatch(ConfirmAccount(record._id,record));
            }}
          >
          {
            record.confirmed ? 'confirmé': 'non confirmé'
          }
          </Button>
        </>
      ),
    },
    {
      title: "SUPPRIMER",
      key: "DeleteCitizen",
      dataIndex: "DeleteCitizen",
      render: (_, record) => (
        <>
          <Button
            type="primary"
            danger
            onClick={() => {
              dispatch(DeleteCitizen(record._id));
            }}
          >
            Supprimer
          </Button>
        </>
      ),
    },
  ];
  return (
    <Form form={form} component={false}>
      
      <CitizenCreateForm
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
        errors={errors}
        selectors={selectors}
      />
      <CitizenUpdateForm
        visible={visibleUpdate}
        data={citizens.single ? citizens.single : {}}
        onUpdate={onUpdate}
        onCancel={() => {
          setvisibleUpdate(false);
        }}
      />
      <h1>LA LISTE DES CITIZENS</h1>
      <Table
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        bordered
        dataSource={citizen}
        columns={columns}
        rowClassName="editable-row"
        pagination={{
          onChange: cancel,
        }}
      />
    </Form>
  );
};

export default Citizen;
