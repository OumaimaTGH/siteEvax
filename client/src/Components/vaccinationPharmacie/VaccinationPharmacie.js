import React from "react";
import './VaccinationPharmacie.css';
import { Form, Input, Button, Select,Radio } from 'antd';
import RecherchePharmacie from "./RecherchePharmacie";
const { Option } = Select;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const VaccinationPharmacie = () => {
  const [form] = Form.useForm();
  const [value, setValue] = React.useState(1);

  const onGenderChange = (value) => {
    // eslint-disable-next-line default-case
//     switch (value) {
//       case 'male':
//         form.setFieldsValue({
//           note: 'Hi, man!',
//         });
//         return;

//       case 'female':
//         form.setFieldsValue({
//           note: 'Hi, lady!',
//         });
//         return;

//       case 'other':
//         form.setFieldsValue({
//           note: 'Hi there!',
//         });
//     }
  };
const onChange = e => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };
  const onFinish = (values) => {
    console.log(values);
  };

  const onReset = () => {
    form.resetFields();
  };

 

  return (
    <div  className= "contactBlock">

    <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
      {/* <Form.Item
        name="note"
        label="Note"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item> */}


      <Radio.Group onChange={onChange} value={value}>
      <Radio value={1}>Recherche par emplacement géographique</Radio>
      <Radio value={2} onChange={RecherchePharmacie}>Recherche par nom</Radio>
    </Radio.Group>
 <br/>


      <Form.Item
        name="gouvernorat"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select
          placeholder="Choisir le gouvernorat"
          onChange={onGenderChange}
          allowClear
        >
          <Option value="Ariana">Ariana</Option>
          <Option value="Ben Arous">Ben Arous</Option>
          <Option value="Béja">Béja</Option>
          <Option value="Bizerte">Bizerte</Option>
          <Option value="Gabès">Gabès</Option>
          <Option value="Gafsa">Gafsa</Option>
          <Option value="Jendouba">Jendouba</Option>
          <Option value="Kairouan">Kairouan</Option>
          <Option value="Kasserine">Kasserine</Option>
          <Option value="Kébili">Kébili</Option>
          <Option value="Le Kef">Le Kef</Option>
          <Option value="Mahdia">Mahdia</Option>
          <Option value="La Manouba">La Manouba</Option>
          <Option value="Médenine">Médenine</Option>
          <Option value="Monastir">Monastir</Option>
          <Option value="Nabeul">Nabeul</Option>
          <Option value="Sfax">Sfax</Option>
          <Option value="Sidi Bouzid">Sidi Bouzid</Option>
          <Option value="Siliana">Siliana</Option>
          <Option value="Sousse">Sousse</Option>
          <Option value="Tataouine">Tataouine</Option>
          <Option value="Tozeur">Tozeur</Option>
          <Option value="Tunis">Tunis</Option>
          <Option value="Zaghouan">Zaghouan</Option>

        </Select>
      </Form.Item>

      <Form.Item
        name="Choisir la délégation"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select
          placeholder="Choisir la délégation"
          onChange={onGenderChange}
          allowClear
        >
          {/*  */}
        
        </Select>
      </Form.Item>

      <Form.Item
        name="Choisir la commune"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select
          placeholder="Choisir la commune"
          onChange={onGenderChange}
          allowClear
        >
        
        
        </Select>
      </Form.Item>

      <Form.Item
        name="Sélectionnez la pharmacie"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select
          placeholder="Sélectionnez la pharmacie"
          onChange={onGenderChange}
          allowClear
        >
       
        </Select>
      </Form.Item>


      <Form.Item
        noStyle
        shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
      >
        {({ getFieldValue }) =>
          getFieldValue('gouvernorat') === 'other' ? (
            <Form.Item
              name="customizeGender"
              label="Customize Gender"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
          ) : null
        }
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Recherche
        </Button>
        <Button htmlType="button" onClick={onReset}>
          Annuler
        </Button>
        {/* <Button type="link" htmlType="button" onClick={onFill}>
          Fill form
        </Button> */}
      </Form.Item>
    </Form>
    </div>
  );
 
};


export default VaccinationPharmacie;