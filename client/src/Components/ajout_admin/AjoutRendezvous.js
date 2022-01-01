import React, { useState } from 'react';
import { Button, Modal, Form, Input,Select,DatePicker } from 'antd';
const { Option } = Select;
 const RendezvousCreateForm = ({ visible, onCreate, onCancel }) => {
  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title="Ajouter Un rendez_vous"
      okText="Create"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
          })
          .catch((info) => {
            console.log('Validate Failed:', info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{
          modifier: 'public',
        }}
      >
        <Form.Item
          name="prénom"
          label="Prénom"
          rules={[
            {
              required: true,
              message: 'Please input the title of collection!',
            },
          ]}
        >
          <Input type="textarea" />
        </Form.Item>
        <Form.Item name="nom" label="Nom"
        rules={[
          {
            required: true,
            message: 'Please input the title of collection!',
          },
        ]}>
          <Input type="textarea" />
        </Form.Item>
        <Form.Item name="email" label="Email"
        rules={[
          {
            required: true,
            message: 'Please input the title of collection!',
          },
        ]}>
          <Input type="textarea" />
        </Form.Item>
        <Form.Item name="genre" label="Genre"
        rules={[
          {
            required: true,
            message: 'Please input the title of collection!',
          },
        ]}>
          <Input type="textarea" />
        </Form.Item>
        <Form.Item name="numéro_de_téléphone" label="Numéro de téléphone"
        rules={[
          {
            required: true,
            message: 'Please input the title of collection!',
          },
        ]}>
          <Input type="textarea" />
        </Form.Item>
        <Form.Item name="code_inscription" label="code_inscription"
        rules={[
          {
            required: true,
            message: 'Please input the title of collection!',
          },
        ]}>
          <Input type="textarea" />
        </Form.Item>
        <Form.Item name="date_de_vaccination" label="Date De Vaccination"
         rules={[
            {
              required: true,
              message: 'Please input the title of collection!',
            },
          ]}>
        <DatePicker />
      </Form.Item>
        <Form.Item name="modifier" className="collection-create-form_last-form-item">
        </Form.Item>
      </Form>
    </Modal>
  );
};



export default RendezvousCreateForm ;