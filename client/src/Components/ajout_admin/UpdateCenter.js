import React, { useState, useEffect } from "react";
import { Button, Modal, Form, Input, Select } from "antd";
import InputGroup from "../../util/InputGroup";
import { useSelector } from "react-redux";
import Errors from "../../util/Errors";
const { Option } = Select;
const CentreUpdateForm = ({ visible, data, onUpdate, onCancel }) => {
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
      title="modifier Un Centre De Vaccination"
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
            name="name"
            placeholder="le nom du centre"
            value={form.name}
            onChange={handleChange}
            style={{ margin: "10px 0 10px 0" }}
          />
          <Errors errors={errors.name} />
        </div>
        <div>
        <Form.Item>
          <Select
            placeholder="gouvernorat"
            name="governorate"
            allowClear
            value={form.governorate}
            style={{ margin: "10px 0 10px 0" }}
            onChange={handleChange}
          >
            <Option value="male">male</Option>
            <Option value="female">female</Option>
            <Option value="other">other</Option>
          </Select>
        </Form.Item>
        <Errors errors={errors.governorate} />
        </div>
       <div>
       <Form.Item>
          <Select
            placeholder="municipalité"
            name="municipality"
            value={form.municipality}
            style={{ margin: "10px 0 10px 0" }}
            onChange={handleChange}
            allowClear
          >
            <Option value="male">male</Option>
            <Option value="female">female</Option>
            <Option value="other">other</Option>
          </Select>
        </Form.Item>
        <Errors errors={errors.municipality} />
       </div>
       <div>
       <Form.Item>
          <Select
            placeholder="délégation"
            name="delegation"
            value={form.delegation}
            style={{ margin: "10px 0 10px 0" }}
            onChange={handleChange}
            allowClear
          >
            <Option value="male">male</Option>
            <Option value="female">female</Option>
            <Option value="other">other</Option>
          </Select>
        </Form.Item>
        <Errors errors={errors.delegation} />
       </div>
       <div>
       <Form.Item>
          <Input
            type="text"
            name="address"
            placeholder="adresse"
            onChange={handleChange}
            value={form.address}
            style={{ margin: "10px 0 10px 0" }}
          />
        </Form.Item>
        <Errors errors={errors.address} />
       </div>
        <div>
        <Form.Item>
          <Input
            type="number"
            name="postal_code"
            placeholder="code postale"
            onChange={handleChange}
            value={form.postal_code}
            style={{ margin: "10px 0 10px 0" }}
          />
        </Form.Item>
        <Errors errors={errors.postal_code} />
        </div>
        <div>
        <Form.Item>
          <Input
            type="number"
            name="quantity"
            placeholder="quantité"
            onChange={handleChange}
            value={form.quantity}
            style={{ margin: "10px 0 10px 0" }}
          />
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

export default CentreUpdateForm;
