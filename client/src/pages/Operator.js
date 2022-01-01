
import {
    Table,
    Tag,
    Input,
    Button,
    InputNumber,
    Popconfirm,
    Form,
    Typography,
    Alert,
  } from "antd";
  import React, { useEffect, useState } from "react";
  import { useSelector, useDispatch } from "react-redux";
  import OperatorCreateForm from "../Components/ajout_admin/AjoutOperator";
  import OperatorUpdateForm from "../Components/ajout_admin/UpdateOperator";
  import './login.css';

  import {
    Create,
    DeleteOperator,
    FindAll,
    UpdateOperator,
    FindSingle,
    UpdatePassword,
  } from "../redux/actions/OperatorActions";
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
  
  const Operator = (props) => {
    const operators = useSelector((state) => state.operators);
    const messages = useSelector(state => state.messages)
    const errors = useSelector((state) => state.errors);
    const [operator, setoperator] = useState([]);
    const dispatch = useDispatch();
    const [visible, setVisible] = useState(false);
    const [visibleUpdate, setvisibleUpdate] = useState(false);
    const onCreate = (values) => {
      dispatch(Create(values, setVisible));
    };
    const onUpdate = (values, id) => {
      dispatch(UpdateOperator(values, id, setvisibleUpdate));
    };
    const [form] = Form.useForm();
    const [editingKey, setEditingKey] = useState("");
  
    const cancel = () => {
      setEditingKey("");
    };
  
    useEffect(async () => {
      await dispatch(FindAll());
      setoperator(operators.all);
    }, [operators]);
  
    const columns = [
      {
        title: "NOM DE L'OPÉRATEUR",
        dataIndex: "fullname",
        key: "fullname",
        editable: true,
      },
      {
        title: "EMAIL",
        dataIndex: "email",
        key: "email",
        editable: true,
      },
      {
        title: "MODIFIER",
        key: "modifier_operators",
        dataIndex: "modifier_operators",
        render: (_, record) => (
          <>
            <Button className="mtp"
              type="secondary"
              
              disabled={editingKey !== ""}
              onClick={() => {
                dispatch(UpdatePassword(record._id));
              }}
            >           
              Modifier mot de pass
            </Button>
          </>
        ),
      },
      {
        title: "SUPPRIMER",
        key: "DeleteOperator",
        dataIndex: "DeleteOperator",
        render: (_, record) => (
          <>
            <Button
              type="primary"
              danger
              onClick={() => {
                dispatch(DeleteOperator(record._id));
              }}
            >
              Supprimer
            </Button>
          </>
        ),
      },
    ];
    return (
      <>
      {
        messages && messages.message ? (<Alert 
          message={messages.message}
          type="success"
          closable
        />) : ''
      }
      <Form form={form} component={false}>
        <Button
          type="ajouter"
          onClick={() => {
            setVisible(true);
          }}
          danger
        >
          Ajouter Un Opérateur
        </Button>
        <OperatorCreateForm
          visible={visible}
          onCreate={onCreate}
          onCancel={() => {
            setVisible(false);
          }}
          errors={errors}
          selectors={selectors}
        />
        <h1>LA LISTE DES OPÉRATEURS</h1>
        <Table
          components={{
            body: {
              cell: EditableCell,
            },
          }}
          bordered
          dataSource={operator}
          columns={columns}
          rowClassName="editable-row"
          pagination={{
            onChange: cancel,
          }}
        />
      </Form>
      </>
      
    );
  };
  
  export default Operator;
  