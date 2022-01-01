import React, { useState } from "react";
import { Button, Modal, Form, Input, Select } from "antd";
import InputGroup from "../../util/InputGroup";
import { useSelector } from "react-redux";
import Errors from "../../util/Errors";
const { Option } = Select;
const VaccinCreateForm = ({
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
      title="Ajouter Un vaccin"
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
          <Form.Item name="name">
            <Input type="text" placeholder="le nom du vaccin" />
          </Form.Item>
          <Errors errors={errors.name} />
        </div>
        <div>
          <Form.Item name="quantity">
            <Input type="text" placeholder="quantité" />
          </Form.Item>
          <Errors errors={errors.quantity} />
        </div>
        <Form.Item
          name="modifier"
          className="collection-create-form_last-form-item"
        ></Form.Item>
      </Form>
    </Modal>
  );
};

export default VaccinCreateForm;
