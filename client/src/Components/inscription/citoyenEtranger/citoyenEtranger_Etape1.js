import React from "react";
import {DatePicker, TimePicker,Form,Input,InputNumber,Cascader,Select,Row,Col,Checkbox,Button,AutoComplete,} from 'antd';

const { Option } = Select;
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 9 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

  const onFinish = (values) => {
    console.log(values);
  };
  const { RangePicker } = DatePicker;
  //const {Option} = Select;
  const config = {
    rules: [
      {
        type: 'object',
        required: true,
        message: 'Please select time!',
      },
    ],
  };
 

export const AppCitoyenEtranger_Etape1  =(
   
  <div id="step1">     
    <div id="num_identite">
    <Form.Item
        name="num_identite"
        label="Numéro identité"
        rules={[
          {
            type: 'text',
            message: 'The input is not valid code!',
          },
          {
            required: true,
            message: 'Numéro identité obligatoire',
          },
        ]}
      >
        <Input style={{ width: '80%' }} />
      </Form.Item>
      </div>

      <Form.Item name="date-picker" label="Date de naissance" {...config}>
        <DatePicker />
      </Form.Item>

      </div>

  );

