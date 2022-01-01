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
import PharmacieCreateForm from "../Components/ajout_admin/AjoutPharmacie";
import PharmacieUpdateForm from "../Components/ajout_admin/UpdatePharmacie";
import {
  Create,
  DeletePharmacy,
  FindAll,
  UpdatePharmacy,
  FindSingle,
} from "../redux/actions/PharmacyActions";
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

const Pharmacie = (props) => {
  const pharmacies = useSelector((state) => state.pharmacies);
  const errors = useSelector((state) => state.errors);
  const [pharmacy, setpharmacy] = useState([]);
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [visibleUpdate, setvisibleUpdate] = useState(false);
  const onCreate = (values) => {
    dispatch(Create(values, setVisible));
  };
  const onUpdate = (values, id) => {
    dispatch(UpdatePharmacy(values, id, setvisibleUpdate));
  };
  const [form] = Form.useForm();
  const [editingKey, setEditingKey] = useState("");

  const cancel = () => {
    setEditingKey("");
  };

  useEffect(() => {
    dispatch(FindAll());
    setpharmacy(pharmacies.all);
  }, [pharmacies]);

  const columns = [
    {
      title: "NOM pharmacie",
      dataIndex: ["local", "name_fr"],
      key: "name",
      editable: true,
    },
    {
      title: "ordre",
      dataIndex: ["local", "n_order"],
      key: "name",
      editable: true,
    },
    {
      title: "GOUVERNORAT",
      dataIndex: ["local", "governorate"],
      key: "governorate",
      editable: true,
    },
    {
      title: "MUNICIPALITÉ",
      dataIndex: ["local", "municipality"],
      key: "municipality",
      editable: true,
    },
    {
      title: "DÉLÉGATION",
      dataIndex: ["local", "delegation"],
      key: "delegation",
      editable: true,
    },
    {
      title: "ADRESSE ",
      dataIndex: ["local", "addr_fr"],
      key: "address",
      editable: true,
    },
    {
      title: "nom owner",
      key: "quantity",
      dataIndex: ["owner", "firstname"],
      editable: true,
    },
    {
      title: "prénom owner",
      key: "quantity",
      dataIndex: ["owner", "lastname"],
      editable: true,
    },
/*     {
      title: "MODIFIER",
      key: "modifier_centres_devaccination",
      dataIndex: "modifier_centres_devaccination",

      render: (_, record) => {
        return (
          <Typography.Link
            disabled={editingKey !== ""}
            onClick={() => {
              setvisibleUpdate(true);
              dispatch(FindSingle(record._id));
            }}
          >
            Modifier
          </Typography.Link>
        );
      },
    }, */
    {
      title: "SUPPRIMER",
      key: "DeletePharmacy",
      dataIndex: "DeletePharmacy",
      render: (_, record) => (
        <>
          <Button
            type="primary"
            danger
            onClick={() => {
              dispatch(DeletePharmacy(record._id));
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
        Ajouter Une pharmacie
      </Button>
      <PharmacieCreateForm
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
        errors={errors}
        selectors={selectors}
      />
      <PharmacieUpdateForm
        visible={visibleUpdate}
        data={pharmacies.single ? pharmacies.single : {}}
        onUpdate={onUpdate}
        onCancel={() => {
          setvisibleUpdate(false);
        }}
      />
      <h1>Les Pharmacies De vaccination</h1>
      <Table
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        bordered
        dataSource={pharmacy}
        columns={columns}
        rowClassName="editable-row"
        pagination={{
          onChange: cancel,
        }}
      />
    </Form>
  );
};

export default Pharmacie;