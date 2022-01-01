import React from "react";
import { Form, Input, Button,Select,Row, Col  } from 'antd';
const { Option } = Select;
const prefixSelector = (
  <Form.Item name="prefix" noStyle>
    <Select defaultValue="216" style={{ width: 70 }}>
      <Option value="216">+216</Option>
      <Option value="87">+87</Option>
    </Select>
  </Form.Item>
);
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};
export default function AppVerifNumTel_Etape2(props) {

  return (
    <div id="step1">     
    <p>vous allez recevoir votre code d'inscription
         sur ce mail. ce code sera utilisé dans la compagne
      de vaccination désormais. :*</p>
    <div style={{display: "flex", justifyContent: "space-evenly",}}>
    <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
      <Input />
      </Form.Item>

    <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
        Envoyer email de confirmation
        </Button>
        
      </Form.Item>
    </div></div>  
    );

}
