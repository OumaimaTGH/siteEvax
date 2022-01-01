import React, { useState, Component, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";

import { Alert, DatePicker, Form, Input, Button, Select, Radio } from "antd";
import {
  ConnectCitizen,
  UpdateCitizen,
} from "../../../redux/actions/CitizenActions";

export const AppMajInscription = (props) => {
  const errors = useSelector((state) => state.errors);
  const citizens = useSelector((state) => state.citizens);
  const dispatch = useDispatch();

  const [form, setform] = useState({});
  const [form_connect, setform_connect] = useState({});

  const HandleChange = (e) => {
    setform({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const HandleChangeConnect = (e) => {
    setform_connect({
      ...form_connect,
      [e.target.name]: e.target.value,
    });
  };

  const onFinish = () => {
    dispatch(UpdateCitizen(form, props.history));
  };
  const onConnect = async () => {
    await dispatch(ConnectCitizen(form_connect, setform));
  };

  return (
    <>
      {Object.keys(form).length === 0 ? (
        <Form
          name="citizen-connect"
          className="login-form"
          onFinish={onConnect}
        >
          {errors && <span style={{ color: "red" }}>{errors.message}</span>}
          <div>
            <Form.Item label="Cin">
              <Input
                style={{ width: "100%" }}
                name="cin"
                onChange={HandleChangeConnect}
              />
              <br />
              {errors && <span style={{ color: "red" }}>{errors.cin}</span>}
            </Form.Item>
          </div>
          <div>
            <Form.Item label="Code connection">
              <Input
                style={{ width: "100%" }}
                name="password"
                onChange={HandleChangeConnect}
              />
              <br />
              {errors && <span style={{ color: "red" }}>{errors.password}</span>}
            </Form.Item>
          </div>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            style={{ width: "120px" }}
          >
            Connect
          </Button>
        </Form>
      ) : (
        <Form name="normal_login" className="login-form" onFinish={onFinish}>
          <div id="step1">
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <Form.Item label="Cin">
                <Input
                  style={{ width: "100%" }}
                  name="cin"
                  onChange={HandleChange}
                  value={form.cin}
                />
                <br />
                {errors && <span style={{ color: "red" }}>{errors.cin}</span>}
              </Form.Item>
              <Form.Item label="Téléphone">
                <Input
                  style={{ width: "100%" }}
                  name="phone"
                  onChange={HandleChange}
                  value={form.phone}
                />
                <br />
                {errors && <span style={{ color: "red" }}>{errors.phone}</span>}
              </Form.Item>

              <Form.Item name="email" label="email">
                <Input
                  style={{ width: "100%" }}
                  name="email"
                  onChange={HandleChange}
                  value={form.email}
                />
                <br />
                {errors && <span style={{ color: "red" }}>{errors.email}</span>}
              </Form.Item>
            </div>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <Form.Item label="date de naissance">
                <Input
                  style={{ width: "100%" }}
                  name="date_of_birth"
                  onChange={HandleChange}
                  type="date"
                  className="ant-input"
                  value={form.date_of_birth}
                />
                <br />
                {errors && (
                  <span style={{ color: "red" }}>{errors.date_of_birth}</span>
                )}
              </Form.Item>
            </div>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <Form.Item label="Genre">
                <select
                  style={{ width: "160px" }}
                  name="sexe"
                  onChange={HandleChange}
                  className="ant-input"
                  value={form.sexe}
                >
                  <option value="Femme" selected>
                    Femme
                  </option>
                  <option value="Homme">Homme</option>
                </select>
                <br />
                {errors && <span style={{ color: "red" }}>{errors.sexe}</span>}
              </Form.Item>
              <Form.Item label="Nom">
                <Input
                  style={{ width: "100%" }}
                  name="firstname"
                  onChange={HandleChange}
                  value={form.firstname}
                />
                <br />
                {errors && (
                  <span style={{ color: "red" }}>{errors.firstname}</span>
                )}
              </Form.Item>
              <Form.Item label="Prénom">
                <Input
                  style={{ width: "100%" }}
                  name="lastname"
                  onChange={HandleChange}
                  value={form.lastname}
                />
                <br />
                {errors && (
                  <span style={{ color: "red" }}>{errors.lastname}</span>
                )}
              </Form.Item>
            </div>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <Form.Item label="Nom père">
                <Input
                  style={{ width: "80%" }}
                  name="father_lastname"
                  onChange={HandleChange}
                  value={form.father_lastname}
                />
                <br />
                {errors && (
                  <span style={{ color: "red" }}>{errors.father_lastname}</span>
                )}
              </Form.Item>
              <Form.Item label="Nom grand père">
                <Input
                  style={{ width: "80%" }}
                  name="grandfather_lastname"
                  onChange={HandleChange}
                  value={form.grandfather_lastname}
                />
                <br />
                {errors && (
                  <span style={{ color: "red" }}>
                    {errors.grandfather_lastname}
                  </span>
                )}
              </Form.Item>
              <Form.Item label="Prénom mère">
                <Input
                  style={{ width: "80%" }}
                  name="mother_firstname"
                  onChange={HandleChange}
                  value={form.mother_firstname}
                />
                <br />
                {errors && (
                  <span style={{ color: "red" }}>
                    {errors.mother_firstname}
                  </span>
                )}
              </Form.Item>
              <Form.Item label="nom mère">
                <Input
                  style={{ width: "80%" }}
                  name="mother_lastname"
                  onChange={HandleChange}
                  value={form.mother_lastname}
                />
                <br />
                {errors && (
                  <span style={{ color: "red" }}>{errors.mother_lastname}</span>
                )}
              </Form.Item>
            </div>

            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <label>Gouvernorat </label>
              <Form.Item>
                <select
                  style={{ width: "160px" }}
                  name="governorate"
                  onChange={HandleChange}
                  className="ant-input"
                  value={form.gouvernorate}
                >
                  <option value="Tunis" selected>
                    Tunis
                  </option>
                  <option value="Beja">Beja</option>
                </select>
                <br />
                {errors && (
                  <span style={{ color: "red" }}>{errors.gouvernorate}</span>
                )}
              </Form.Item>

              <label> Délégation </label>
              <Form.Item>
                <select
                  style={{ width: "160px" }}
                  name="delegation"
                  onChange={HandleChange}
                  className="ant-input"
                  value={form.delegation}
                >
                  <option value="Tunis" selected>
                    Tunis
                  </option>
                  <option value="Beja">Beja</option>
                </select>
                <br />
                {errors && (
                  <span style={{ color: "red" }}>{errors.delegation}</span>
                )}
              </Form.Item>

              <label> Municipalité </label>
              <Form.Item>
                <select
                  style={{ width: "160px" }}
                  name="municipality"
                  onChange={HandleChange}
                  className="ant-input"
                  value={form.municipality}
                >
                  <option value="Tunis" selected>
                    Tunis
                  </option>
                  <option value="Beja">Beja</option>
                </select>
                <br />
                {errors && (
                  <span style={{ color: "red" }}>{errors.municipality}</span>
                )}
              </Form.Item>
            </div>

            <div
              class="step3"
              style={{ display: "flex", marginLeft: "50px", marginTop: "50px" }}
            >
              <div id="step1">
                <Form.Item label="Avez-vous eu un test PCR positif au cours des 3 derniers mois ?">
                  <Radio.Group
                    name="positif_pcr"
                    onChange={HandleChange}
                    value={form.positif_pcr}
                  >
                    <Radio value={"true"}>Oui</Radio>
                    <Radio value={"false"}>Non</Radio>
                  </Radio.Group>
                  {errors && (
                    <span style={{ color: "red" }}>{errors.positif_pcr}</span>
                  )}
                </Form.Item>
                <Form.Item label="Avez-vous des antécédents d'allergie ou d'hypersensibilité à certaines substances ou avec d'autres vaccins?">
                  <Radio.Group
                    name="allergy"
                    onChange={HandleChange}
                    value={form.allergy}
                  >
                    <Radio value={"true"}>Oui</Radio>
                    <Radio value={"false"}>Non</Radio>
                  </Radio.Group>
                  {errors && (
                    <span style={{ color: "red" }}>{errors.allergy}</span>
                  )}
                </Form.Item>
                <Form.Item label="Êtes-vous traité par un traitement anticoagulant?">
                  <Radio.Group
                    name="anticaogulant"
                    onChange={HandleChange}
                    value={form.anticaogulant}
                  >
                    <Radio value={"true"}>Oui</Radio>
                    <Radio value={"false"}>Non</Radio>
                  </Radio.Group>
                  {errors && (
                    <span style={{ color: "red" }}>{errors.anticaogulant}</span>
                  )}
                </Form.Item>
                <Form.Item label="Présentez-vous des troubles de l'hémostase?">
                  <Radio.Group
                    name="hemostasis"
                    onChange={HandleChange}
                    value={form.hemostasis}
                  >
                    <Radio value={"true"}>Oui</Radio>
                    <Radio value={"false"}>Non</Radio>
                  </Radio.Group>
                  {errors && (
                    <span style={{ color: "red" }}>{errors.hemostasis}</span>
                  )}
                </Form.Item>
                <Form.Item label="Êtes-vous enceintes?">
                  <Radio.Group
                    name="pregnant"
                    onChange={HandleChange}
                    value={form.pregnant}
                  >
                    <Radio value={"true"}>Oui</Radio>
                    <Radio value={"false"}>Non</Radio>
                  </Radio.Group>
                  {errors && (
                    <span style={{ color: "red" }}>{errors.pregnant}</span>
                  )}
                </Form.Item>
              </div>
            </div>
          </div>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            style={{ width: "120px" }}
          >
            Valider
          </Button>
        </Form>
      )}
    </>
  );
};
