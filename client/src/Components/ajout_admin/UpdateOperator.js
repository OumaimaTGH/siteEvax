import React, { useState, useEffect } from "react";
import { Button, Modal, Form, Input, Select } from "antd";
import InputGroup from "../../util/InputGroup";
import { useSelector } from "react-redux";
import Errors from "../../util/Errors";
const { Option } = Select;
const OperatorUpdateForm = ({ visible, data, onUpdate, onCancel }) => {
  const [form, setform] = useState({});
  const errors = useSelector((state) => state.errors);

  useEffect(() => {
    setform(data);
  }, [data]);

  const handleChange = (e) => {
    setform({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <Modal
      visible={visible}
      title="modifier Un Operator"
      okText="Update"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        onUpdate(form, data._id);
      }}
    >
      <Form
        layout="vertical"
        name="form_in_modal"
        initialValues={{
          modifier: "public",
        }}
      >
        <div>
          <Input
            type="text"
            name="fullname"
            placeholder="le nom du operator"
            value={form.fullname}
            onChange={handleChange}
            style={{ margin: "10px 0 10px 0" }}
          />
          <Errors errors={errors.fullname} />
        </div>
        <div>
        <Form.Item>
          <Input
            type="text"
            name="email"
            placeholder="email"
            onChange={handleChange}
            value={form.email}
            style={{ margin: "10px 0 10px 0" }}
          />
        </Form.Item>
        <Form.Item>
          <Input
            type="text"
            name="role"
            placeholder="role"
            onChange={handleChange}
            value={form.email}
            style={{ margin: "10px 0 10px 0" }}
          />
        </Form.Item>
        <Errors errors={errors.role} />
        </div>
        <Form.Item
          name="modifier"
          className="collection-create-form_last-form-item"
        ></Form.Item>
      </Form>
    </Modal>
  );
};

export default OperatorUpdateForm;
