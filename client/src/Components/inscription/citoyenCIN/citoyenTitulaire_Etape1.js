import React from "react";
import { Form, Input, Button, DatePicker, Row, Col } from 'antd';

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

export default function AppCitoyenTitulaire_Etape1() {
  return(

  <div className="block inscriptionBlock">
      <div className="container-fluid">
           <Row>
           <Col span={19} offset={4}>

           <Form {...layout}  onFinish={onFinish}>
                <Form.Item
                   name="Carte d'identité nationale :"
                   label="Carte d'identité nationale :"
                  rules={[
                     {
                     required: true,
                     },
                    ]}
                 >
                  <Input />
                </Form.Item>
             <Form.Item
                 name="Date de naissance :"
                 label="Date de naissance :"
                  rules={[
                    {
                    required: true,
                    },
                   ]}
                 >
               <DatePicker style={{ width: '50%' }} />

              </Form.Item>
      
      
    </Form>
    </Col>
</Row>

      </div>
   </div>
);
}


