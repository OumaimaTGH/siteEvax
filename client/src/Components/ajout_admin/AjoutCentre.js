import React, { useState } from "react";
import { Button, Modal, Form, Input, Select } from "antd";
import InputGroup from "../../util/InputGroup";
import { useSelector } from "react-redux";
import Errors from "../../util/Errors";
const { Option } = Select;
const CentreCreateForm = ({
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
      title="Ajouter Un Centre De Vaccination"
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
            <Input name="nom_centre" type="text" placeholder="le nom du centre" />
          </Form.Item>
          <Errors errors={errors.name} />
        </div>
        <div>
          <Form.Item name="governorate">
            <Select id="gouvernorat" name="gouvernorat" placeholder="gouvernorat" allowClear>
              {selectors.map((selector) => (
                <>
                  <Option value={selector.gouvernorat_code}>
                    {selector.gouvernorat}
                  </Option>
                </>
              ))}
            </Select>
          </Form.Item>
          <Errors errors={errors.governorate} />
        </div>

        <div>
          <Form.Item name="municipality">
            <Select name="municipality" placeholder="municipalité" allowClear>
              {selectors.map((selector) => (
                <>
                  <Option value={selector.gouvernorat_code}>
                    {selector.gouvernorat}
                  </Option>
                </>
              ))}
            </Select>
          </Form.Item>
          <Errors errors={errors.municipality} />
        </div>
        <div>
          <Form.Item name="delegation">
          <Select name="delegation" placeholder="delegation" allowClear>
              {selectors.map((selector) => (
                <>
                  <Option value={selector.gouvernorat_code}>
                    {selector.gouvernorat}
                  </Option>
                </>
              ))}
            </Select>
          </Form.Item>
          <Errors errors={errors.delegation} />
        </div>
        <div>
          <Form.Item name="address">
            <Input name="address" type="text" placeholder="adresse" />
          </Form.Item>
          <Errors errors={errors.address} />
        </div>
        <div>
          <Form.Item name="postal_code">
            <Input name="postal_code" type="text" placeholder="code postale" />
          </Form.Item>
          <Errors errors={errors.postal_code} />
        </div>
        <div>
          <Form.Item name="quantity">
            <Input name="quantity" type="text" placeholder="quantité" />
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

export default CentreCreateForm;
