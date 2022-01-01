import React from "react";
import {
  Radio,
  DatePicker,
  TimePicker,
  Form,
  Input,
  InputNumber,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
} from "antd";
import { Field } from "@progress/kendo-react-form";

export default function HealthDetails({ onChange, errors }) {
  return (
    <div id="step1">
      <Form.Item
        label="Avez-vous eu un test PCR positif au cours des 3 derniers mois ?"
      >
        <Radio.Group name="positif_pcr" onChange={onChange}>
          <Radio value={"true"}>Oui</Radio>
          <Radio value={"false"}>Non</Radio>
        </Radio.Group>
        {errors && <span style={{ color: "red" }}>{errors.positif_pcr}</span>}
      </Form.Item>
      <Form.Item
        label="Avez-vous des antécédents d'allergie ou d'hypersensibilité à certaines substances ou avec d'autres vaccins?"
      >
        <Radio.Group  name="allergy"  onChange={onChange}>
        <Radio value={"true"}>Oui</Radio>
          <Radio value={"false"}>Non</Radio>
        </Radio.Group>
        {errors && <span style={{ color: "red" }}>{errors.allergy}</span>}
      </Form.Item>
      <Form.Item
        label="Êtes-vous traité par un traitement anticoagulant?"
      >
        <Radio.Group name="anticaogulant" onChange={onChange}>
        <Radio value={"true"}>Oui</Radio>
          <Radio value={"false"}>Non</Radio>
        </Radio.Group>
        {errors && <span style={{ color: "red" }}>{errors.anticaogulant}</span>}
      </Form.Item>
      <Form.Item
        label="Présentez-vous des troubles de l'hémostase?"
      >
        <Radio.Group name="hemostasis" onChange={onChange}>
        <Radio value={"true"}>Oui</Radio>
          <Radio value={"false"}>Non</Radio>
        </Radio.Group>
        {errors && <span style={{ color: "red" }}>{errors.hemostasis}</span>}
      </Form.Item>
      <Form.Item  label="Êtes-vous enceintes?">
        <Radio.Group name="pregnant" onChange={onChange}>
        <Radio value={"true"}>Oui</Radio>
          <Radio value={"false"}>Non</Radio>
        </Radio.Group>
        {errors && <span style={{ color: "red" }}>{errors.pregnant}</span>}
      </Form.Item>
    </div>
  );
}
