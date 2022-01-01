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
import VaccinCreateForm from "../Components/ajout_admin/AjoutVaccin";
import VaccinUpdateForm from "../Components/ajout_admin/UpdateVaccin";
import './login.css';

import {
  Create,
  DeleteVaccin,
  FindAll,
  UpdateVaccin,
  FindSingle,
} from "../redux/actions/VaccinActions";
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

const Vaccin = (props) => {
  const vaccins = useSelector((state) => state.vaccins);
  const errors = useSelector((state) => state.errors);
  const [vaccin, setvaccin] = useState([]);
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [visibleUpdate, setvisibleUpdate] = useState(false);
  const onCreate = (values) => {
    dispatch(Create(values, setVisible));
  };
  const onUpdate = (values, id) => {
    dispatch(UpdateVaccin(values, id, setvisibleUpdate));
  };
  const [form] = Form.useForm();
  const [editingKey, setEditingKey] = useState("");

  const cancel = () => {
    setEditingKey("");
  };

  useEffect(() => {
    dispatch(FindAll());
    setvaccin(vaccins.all);
  },  [vaccin.length === 0 ?  vaccins: vaccin]);

  const columns = [
    {
      title: "NOM DU VACCIN",
      dataIndex: "name",
      key: "name",
      editable: true,
    },
    {
      title: "QUANTITÉ",
      dataIndex: "quantity",
      key: "quantity",
      editable: true,
    },
    {
      title: "MODIFIER",
      key: "modifier_vaccins",
      dataIndex: "modifier_vaccins",
      render: (_, record) => (
        <>
          <Button className="mtp"
            type="secondary"
            
            disabled={editingKey !== ""}
            onClick={() => {
              setvisibleUpdate(true);
              dispatch(FindSingle(record._id));
            }}
          >           
            Modifier
          </Button>
        </>
      ),
    },
    {
      title: "SUPPRIMER",
      key: "DeleteVaccin",
      dataIndex: "DeleteVaccin",
      render: (_, record) => (
        <>
          <Button
            type="primary"
            danger
            onClick={() => {
              dispatch(DeleteVaccin(record._id));
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
      <Button
        type="ajouter"
        onClick={() => {
          setVisible(true);
        }}
        danger
      >
        Ajouter Un Vaccin
      </Button>
      <VaccinCreateForm
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
        errors={errors}
        selectors={selectors}
      />
      <VaccinUpdateForm
        visible={visibleUpdate}
        data={vaccins.single ? vaccins.single : {}}
        onUpdate={onUpdate}
        onCancel={() => {
          setvisibleUpdate(false);
        }}
      />
      <h1>LA LISTE DES VACCINS</h1>
      <Table
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        bordered
        dataSource={vaccin}
        columns={columns}
        rowClassName="editable-row"
        pagination={{
          onChange: cancel,
        }}
      />
    </Form>
  );
};

export default Vaccin;
