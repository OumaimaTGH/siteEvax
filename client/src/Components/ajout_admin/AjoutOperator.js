import React, { useState } from "react";
import { Button, Modal, Form, Input, Select } from "antd";
import InputGroup from "../../util/InputGroup";
import { useSelector } from "react-redux";
import Errors from "../../util/Errors";
const { Option } = Select;
const OperatorCreateForm = ({
  visible,
  onCreate,
  onCancel,
  errors,
  selectors,
}) => {
  const [form] = Form.useForm();

  return (
    <Modal
      visible={visible}
      title="Ajouter Un opérateur"
      okText="Create"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            onCreate(values);
          })
          .catch((info) => {
            console.log("Validate Failed:", info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{
          modifier: "public",
        }}
      >
        <div>
          <Form.Item name="fullname">
            <Input type="text" placeholder="le nom de l'opérateur" />
          </Form.Item>
          <Errors errors={errors.fullname} />
        </div>
        <div>
          <Form.Item name="email">
            <Input type="text" placeholder="email" />
          </Form.Item>
          <Errors errors={errors.email} />
        </div>
        <Form.Item
          name="modifier"
          className="collection-create-form_last-form-item"
        ></Form.Item>
      </Form>
    </Modal>
  );
};

export default OperatorCreateForm;
