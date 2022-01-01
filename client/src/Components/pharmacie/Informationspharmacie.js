import React, { useState,Component, useEffect } from "react";
import {Radio, DatePicker, TimePicker,Form,Input,InputNumber,Cascader,Row,Col,Checkbox,Button,AutoComplete,} from 'antd';
import data from '../data.json';
import Select from "react-select";
import './form-pharmacie.css';

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
function Informationspharmacie(props) {
  const [value, setValue] = React.useState(1);

  const onChange = e => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

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
        name="nomPharmacieArabe"
        label="Nom Pharmacie Arabe"
        rules={[
         
          {
            required: true,
            message: 'Entrer le nom en arabe  de votre pharmacie !',
          },
        ]}
      >
        <Input  style={{ width: '100%' }}/>
      </Form.Item>

      
      <Form.Item
        name="nomPharmacieFrançais"
        label="Nom Pharmacie Français"
        rules={[
         
          {
            required: true,
            message: 'Entrer le nom en français  de votre pharmacie !',
          },
        ]}
      >
        <Input  style={{ width: '100%' }} />
      </Form.Item>
      
  <Form.Item
        name="Numéro d'ordre"
        label="Numéro d'ordre"
        rules={[
         
          {
            required: true,
            message: "Entrer Numéro d'ordre !",
          },
        ]}
      >
        <Input  style={{ width: '100%' }} />
      </Form.Item>
      </div>

      <div style={{display: "flex", justifyContent: "space-evenly",}}>
      <Form.Item
        name="Téléphone fixe professionnel"
        label="Téléphone fixe professionnel"
        rules={[
          {
            required: true,
            message: 'Entrer votre téléphone fixe professionnel!',
          },
        ]}
      ><Input style={{ width: '100%' }} />
      </Form.Item>


      <Form.Item
        name="Téléphone  professionnel"
        label="Téléphone professionnel(autre)"
        rules={[
          {
            required: false,
            
          },
        ]}
      ><Input  style={{ width: '100%' }}/>
      </Form.Item>
      </div>
      
      <div style={{display: "flex", marginLeft: "3%"}}>
      <Form.Item
      name ="categorie"
      label ="Catégorie" rules={[
        {
          required: true,
         
        },
      ]}>
      
      <Radio.Group onChange={onChange} value={value} style={{ width: '100%' }}>
      <Radio value={1}>Pharmacie de jour</Radio>
      <Radio value={2}>Pharmacie de nuit</Radio>
     
    </Radio.Group>
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

       <label> Délégation </label>
      <Select
          placeholder="Selectionner Delegation"
          value={deleg}
          options={delegList}
          onChange={handleDelegChange}
          getOptionLabel={x => x.name}
          getOptionValue={x => x.code}
      />
     

      <label>  Municipalité  </label>
      <Select
          placeholder="Selectionner municipalité"
          value={mun}
          options={munList}
          onChange={handleMunicipalitesChange}
          getOptionLabel={x => x.name}
          getOptionValue={x => x.code}
      />
      </div>
     
      <div style={{justifyContent: "space-evenly",marginTop: "5%"}}>

<Form.Item
  name="Adresse "
  label="Adresse (Arabe)"
  rules={[
    {
      required: true,
      message: 'Entrer Adresse en Arabe',
    },
  ]}
>
  <Input.TextArea  style={{ width: '100%' }} />
</Form.Item>
<Form.Item
  name="Adresse "
  label="Adresse (Français)"
  rules={[
    {
      required: true,
      message: 'Entrer Adresse en Français',
    },
  ]}
>
  <Input.TextArea   style={{ width: '100%' }}/>
</Form.Item>
</div>


      </div>  
    );
  
}

export default Informationspharmacie;

