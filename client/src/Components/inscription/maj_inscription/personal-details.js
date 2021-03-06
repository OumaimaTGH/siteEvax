import React, { useState,Component, useEffect } from "react";
import {DatePicker, TimePicker,Form,Input,InputNumber,Cascader,Row,Col,Checkbox,Button,AutoComplete,} from 'antd';
import data from '../../data.json';
import Select from "react-select";

const { RangePicker } = DatePicker;
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
    <Select style={{ width: 70 }}>
      <Option value="216">+216</Option>
      <Option value="87">+87</Option>
    </Select>
  </Form.Item>
);
function PersonalDetails(props) {
    
  const [gouvernorat, setGouvernorat] = useState(null);
  const [deleg, setDeleg] = useState(null);
  const [delegList, setDelegList] = useState([]);

  const [mun, setMun] = useState(null);
  const [munList, setMunList] = useState([]);

  const [link, setLink] = useState("");

  // handle change event of the gouvernorat dropdown
  const handleGouvernoratChange = (obj) => {
    setGouvernorat(obj);
    setDelegList(obj.delegations);
    setDeleg(null);
  };


  const handleDelegChange = (obj) => {
    setDeleg(obj);
    setMunList(obj.municipalites);
    setMun(null);
  };
  
  // handle change event of the delegation dropdown
  const handleDeleguageChange = (obj) => {
    setDeleg(obj);
  };

  const handleMunicipalitesChange = (obj) => {
    setMun(obj);
  };

  // generate the link when both dropdowns are selected
  useEffect(() => {
    if (gouvernorat && deleg) {
      setLink(`https://www.${gouvernorat.url}/search?q=Clue+Mediator&gl=${gouvernorat.gouvernorat_code}&hl=${deleg.code}`);
    }
  }, [gouvernorat, deleg]);

    return (
    <div id="step1">     
    <div style={{display: "flex", justifyContent: "space-evenly",}}>
    <Form.Item
        name="prenom"
        label="Pr??nom"
        rules={[
          {
            type: 'text',
            message: 'The input is not valid code!',
          },
          {
            required: true,
            message: 'Pr??nom obligatoire',
          },
        ]}
      >
        <Input style={{ width: '80%' }} />
      </Form.Item>



      <Form.Item
        name="nom"
        label="Nom"
        rules={[
          {
            type: 'text',
            message: 'The input is not valid code!',
          },
          {
            required: true,
            message: 'Nom obligatoire',
          },
        ]}
      >
        <Input style={{ width: '80%' }} />
      </Form.Item>

      <Form.Item
        name="gender"
        label="Genre"
        rules={[{ required: true, message: 'Veuillez s??lectionner le sexe??!' }]}
      >
        <Select placeholder="s??lectionnez votre sexe">
          <Option value="male">M??le</Option>
          <Option value="femelle">Femelle</Option>
          <Option value="autre">Autre</Option>
        </Select>
      </Form.Item>


      

      </div>

      <div style={{display: "flex", justifyContent: "space-evenly",}}>


      <Form.Item name="date-picker" label="Date de naissance" {...config}>
        <DatePicker />
      </Form.Item>

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

       <Form.Item
        name="nom_pere"
        label="Nom p??re"
        rules={[
          {
            type: 'text',
            message: 'The input is not valid code!',
          },
          {
            required: true,
            message: 'Pr??nom obligatoire',
          },
        ]}
      >
        <Input style={{ width: '80%' }} />
      </Form.Item>



      
      </div>
      
      <div style={{display: "flex", justifyContent: "space-evenly",}}>

      <Form.Item
        name="nom_grandpere"
        label="Nom grand p??re"
        rules={[
          {
            type: 'text',
            message: 'The input is not valid code!',
          },
          {
            required: true,
            message: 'Nom grand p??re obligatoire',
          },
        ]}
      >
        <Input style={{ width: '80%' }} />
      </Form.Item>
      <Form.Item
        name="prenom_mere"
        label="Pr??nom m??re"
        rules={[
          {
            type: 'text',
            message: 'The input is not valid code!',
          },
          {
            required: true,
            message: 'Pr??nom m??re obligatoire',
          },
        ]}
      >
        <Input style={{ width: '80%' }} />
      </Form.Item>
      <Form.Item
        name="nom_mere"
        label="nom m??re"
        rules={[
          {
            type: 'text',
            message: 'The input is not valid code!',
          },
          {
            required: true,
            message: 'Nom m??re obligatoire',
          },
        ]}
      >
        <Input style={{ width: '80%' }} />
      </Form.Item>



      
      </div>
     
     
      <div style={{display: "flex", justifyContent: "space-evenly",}}>
      <label>Gouvernorat </label>
      <Select
          placeholder="Selectionner gouvernorat"
          value={gouvernorat}
          options={data}
          onChange={handleGouvernoratChange}
          getOptionLabel={x => x.gouvernorat}
          getOptionValue={x => x.gouvernorat_code}
        />

       <label> D??l??gation </label>
      <Select
          placeholder="Selectionner Delegation"
          value={deleg}
          options={delegList}
          onChange={handleDelegChange}
          getOptionLabel={x => x.name}
          getOptionValue={x => x.code}
      />
     

      <label>  Municipalit??  </label>
      <Select
          placeholder="Selectionner municipalit??"
          value={mun}
          options={munList}
          onChange={handleMunicipalitesChange}
          getOptionLabel={x => x.name}
          getOptionValue={x => x.code}
      />


      </div>
      </div>  
    );
  
}

export default PersonalDetails;

