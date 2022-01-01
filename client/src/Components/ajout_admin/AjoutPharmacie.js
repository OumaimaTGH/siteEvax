import React, { useState, useEffect } from "react";
import {DatePicker, Button, Modal, Form, Input, Select } from "antd";
import InputGroup from "../../util/InputGroup";
import { useSelector } from "react-redux";
import Errors from "../../util/Errors";
import data from '../data.json';
import Selectt from "react-select";

const { RangePicker } = DatePicker;
const config = {
  rules: [
    {
      type: 'object',
      required: true,
      message: 'Please select time!',
    },
  ],
};


const { Option } = Select;

const prefixSelector = (
  <Form.Item name="prefix" noStyle>
    <Select defaultValue="216" style={{ width: 70 }}>
      <Option value="216">+216</Option>
    </Select>
  </Form.Item>
);

const PharmacieCreateForm = ({
  visible,
  onCreate,
  onCancel,
  errors,
  selectors,
}) => {
  const [form] = Form.useForm();
  const [gouvernorat, setGouvernorat] = useState(null);
  const [deleg, setDeleg] = useState(null);
  const [delegList, setDelegList] = useState([]);

  const [mun, setMun] = useState(null);
  const [munList, setMunList] = useState([]);

  const [link, setLink] = useState("");

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
    <Modal
      visible={visible}
      title="Ajouter Un Pharmacie De Vaccination"
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
      <h3>Informations du local</h3>
        <div>
          <Form.Item name="local.name_ar">
            <Input type="text" placeholder="le nom du pharmacie en arabe" />
          </Form.Item>
          <Errors errors={errors.name_ar} />
        </div>

        <div>
          <Form.Item name="local.name_fr">
            <Input type="text" placeholder="le nom du pharmacie en français" />
          </Form.Item>
          <Errors errors={errors.name_fr} />
        </div>

        <div>
          <Form.Item name="local.n_order">
            <Input type="text" placeholder="le numero d'ordre" />
          </Form.Item>
          <Errors errors={errors.n_order} />
        </div>

        <div>
          <Form.Item name="local.fix_tel"
          label="Numéro de fixe"
          >
            <Input addonBefore={prefixSelector} style={{ width: '80%' }} />
          </Form.Item>
        </div>

        <div>
          <Form.Item name="local.other_tel"
          label="Autre Numéro de téléphone"
          >
            <Input addonBefore={prefixSelector} style={{ width: '80%' }} />
          </Form.Item>
        </div>

        <div>
          <Form.Item name="local.category">
            <Input type="text" placeholder="catégorie" />
          </Form.Item>
          <Errors errors={errors.category} />
        </div>

        <div>
          <Form.Item name="local.governorate">
            <Selectt placeholder="Selectionner gouvernorat"
          value={gouvernorat}
          options={data}
          onChange={handleGouvernoratChange}
          getOptionLabel={x => x.gouvernorat}
          getOptionValue={x => x.gouvernorat_code}
            />
          </Form.Item>
          <Errors errors={errors.governorate} />
        </div>

        <div>
          <Form.Item name="local.delegation">
          <Selectt placeholder="Selectionner Delegation"
          value={deleg}
          options={delegList}
          onChange={handleDelegChange}
          getOptionLabel={x => x.name}
          getOptionValue={x => x.code}
       />
          </Form.Item>
          <Errors errors={errors.delegation} />
        </div>

        
        <div>
          <Form.Item name="local.municipality">
            <Selectt placeholder="Selectionner municipalité"
            value={mun}
            options={munList}
            onChange={handleMunicipalitesChange}
            getOptionLabel={x => x.name}
            getOptionValue={x => x.code}
            />
          </Form.Item>
          <Errors errors={errors.municipality} />
        </div>


        <div>
          <Form.Item name="local.addr_ar">
            <Input type="text" placeholder="adresse en arabe" />
          </Form.Item>
          <Errors errors={errors.address} />
        </div>
        <div>
          <Form.Item name="local.addr_fr">
            <Input type="text" placeholder="adresse en français" />
          </Form.Item>
          <Errors errors={errors.address} />
        </div>
        
        <h3>Informations du propriétaire</h3>
        <div>
          <Form.Item name="owner.cin">
            <Input type="text" placeholder="le cin du propriétaire" />
          </Form.Item>
          <Errors errors={errors.name} />
        </div>

        <Form.Item name="owner.date_of_birth" label="Date de naissance" {...config}>
        <DatePicker />
        </Form.Item>

        <div>
          <Form.Item name="owner.firstname">
            <Input type="text" placeholder="le nom du propriétaire" />
          </Form.Item>
          <Errors errors={errors.name} />
        </div>
        <div>
          <Form.Item name="owner.lastname">
            <Input type="text" placeholder="le nom du propriétaire" />
          </Form.Item>
          <Errors errors={errors.name} />
        </div>

        <div>
          <Form.Item name="owner.phone"
          label=" Numéro de téléphone"
          >
            <Input addonBefore={prefixSelector} style={{ width: '80%' }} />
          </Form.Item>
        </div>

        <div>
          <Form.Item name="owner.email">
            <Input type="email" placeholder="le mail du propriétaire" />
          </Form.Item>
          <Errors errors={errors.name} />
        </div>

        <div>
          <Form.Item name="owner.fax">
            <Input type="text" placeholder="le fax du propriétaire" />
          </Form.Item>
          <Errors errors={errors.name} />
        </div>

        <Form.Item
          name="modifier"
          className="collection-create-form_last-form-item"
        ></Form.Item>
      </Form>
    </Modal>
  );
};

export default PharmacieCreateForm;
