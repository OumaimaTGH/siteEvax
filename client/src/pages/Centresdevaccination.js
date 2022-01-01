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
import CentreCreateForm from "../Components/ajout_admin/AjoutCentre";
import CentreUpdateForm from "../Components/ajout_admin/UpdateCenter";
import {
  Create,
  DeleteCenter,
  FindAll,
  UpdateCenter,
  FindSingle,
} from "../redux/actions/CenterActions";
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

const Centresdevaccination = (props) => {
  const centers = useSelector((state) => state.centers);
  const errors = useSelector((state) => state.errors);
  const [center, setcenter] = useState([]);
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [visibleUpdate, setvisibleUpdate] = useState(false);
  const onCreate = (values) => {
    dispatch(Create(values, setVisible));
  };
  const onUpdate = (values, id) => {
    dispatch(UpdateCenter(values, id, setvisibleUpdate));
  };
  const [form] = Form.useForm();
  const [editingKey, setEditingKey] = useState("");

  const cancel = () => {
    setEditingKey("");
  };

  useEffect(() => {
    dispatch(FindAll());
    setcenter(centers.all);
  }, [centers]);

  const columns = [
    {
      title: "NOM CENTRE",
      dataIndex: "name",
      key: "name",
      editable: true,
    },
    {
      title: "GOUVERNORAT",
      dataIndex: "governorate",
      key: "governorate",
      editable: true,
    },
    {
      title: "DÉLÉGATION",
      dataIndex: "delegation",
      key: "delegation",
      editable: true,
    },
    {
      title: "MUNICIPALITÉ",
      dataIndex: "municipality",
      key: "municipality",
      editable: true,
    },
    
    {
      title: "ADRESSE ",
      dataIndex: "address",
      key: "address",
      editable: true,
    },
    {
      title: "CODE POSTALE",
      key: "postal_code",
      dataIndex: "postal_code",
      editable: true,
    },
    {
      title: "QUANTITY",
      key: "quantity",
      dataIndex: "quantity",
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
      key: "DeleteCenter",
      dataIndex: "DeleteCenter",
      render: (_, record) => (
        <>
          <Button
            name="delete_center"
            type="primary"
            danger
            onClick={() => {
              dispatch(DeleteCenter(record._id));
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
        name="add_center"
        type="ajouter"
        onClick={() => {
          setVisible(true);
        }}
        danger
      >
        Ajouter Un Centre De Vaccination
      </Button>
      <CentreCreateForm
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
        errors={errors}
        selectors={selectors}
      />
      <CentreUpdateForm
        visible={visibleUpdate}
        data={centers.single ? centers.single : {}}
        onUpdate={onUpdate}
        onCancel={() => {
          setvisibleUpdate(false);
        }}
      />
      <h1>Les Centres De vaccination</h1>
      <Table
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        bordered
        dataSource={center}
        columns={columns}
        rowClassName="editable-row"
        pagination={{
          onChange: cancel,
        }}
      />
    </Form>
  );
};

export default Centresdevaccination;
