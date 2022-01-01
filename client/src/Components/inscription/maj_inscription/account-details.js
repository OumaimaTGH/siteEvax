import React, { useState , Component } from "react";

import {DatePicker, TimePicker,Form,Input,InputNumber,Cascader,Select,Row,Col,Checkbox,Button,AutoComplete,} from 'antd';

const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 6,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 14,
    },
  },
};
const prefixSelector = (
  <Form.Item name="prefix" noStyle>
    <Select defaultValue="216" style={{ width: 70 }}>
      <Option value="216">+216</Option>
      <Option value="87">+87</Option>
    </Select>
  </Form.Item>
);
function AccountDetails (props) {
  const [name,setName] = useState("");
  
  
    return (
    <div id="step1">     
    <div id="code_inp">
    <Form.Item
        name="code"
        label="Code d'inscription"
        rules={[
          {
            type: 'text',
            message: 'The input is not valid code!',
          },
          {
            required: true,
            message: 'Code inscription obligatoire',
          },
        ]}
      >
        <Input style={{ width: '80%' }} />
      </Form.Item>
      </div>

      <Form.Item
        name="phone"
        label="Numéro de téléphone utilisé lors de l'inscription "
        rules={[{ required: true, message: 'Numéro de téléphone obligatoire!' }]}
      >
        <Input addonBefore={prefixSelector} style={{ width: '80%' }} />
      </Form.Item>

      </div>
    );
  
}

export default AccountDetails;

