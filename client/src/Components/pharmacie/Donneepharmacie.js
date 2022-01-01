

import React, { useState , Component } from "react";
import './form-pharmacie.css';

import {DatePicker, TimePicker,Form,Input,InputNumber,Cascader,Select,Row,Col,Checkbox,Button,AutoComplete,} from 'antd';

const { Option } = Select;
const config = {
  rules: [
    {
      type: 'object',
      required: true,
      message: 'Please select time!',
    },
  ],
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

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

function Donneepharmacie (props) {
  const [name,setName] = useState("");
  
  
    return (
      <div id="step2">     
    <div id="donnee_phar">
   <Form.Item name={['CIN']} label="Carte d'identité nationale"  rules={[{ type: 'number', min: 0, max: 99, required: true, }]}>
        <InputNumber style={{ width: '50%' }}/>
      </Form.Item>

      <Form.Item name="date-picker" label="Date de naissance " {...config} >
        <DatePicker style={{ width: '50%' }}/>
      </Form.Item>

      <Form.Item name={['Prénom']} label="Prénom" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      
      <Form.Item name={['Nom']} label="Nom" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item
        name="Téléphone"
        label="Numéro du téléphone portable"
        rules={[
          {
            required: true,
            
          },
        ]}
      ><Input />
      </Form.Item>
      <Form.Item name={['email']} label="Adresse Email" rules={[{ type: 'email', required: true, }]}>
        <Input />
      </Form.Item>
      <Form.Item
        name="Fax"
        label="Fax"
        rules={[
          {
            required: false,
            
          },
        ]}
        
      >
        <Input />
      </Form.Item>
     
      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
          },
        ]}
        {...tailFormItemLayout}
      >
        <Checkbox >
        J'ai lu et accepté toutes les conditions de la convention. Je m’engage à assurer la traçabilité continue de la température et la gestion des DASRI</Checkbox>
      </Form.Item>
      </div>
      </div>
    );
  }

export default Donneepharmacie;