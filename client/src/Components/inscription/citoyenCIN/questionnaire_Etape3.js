import React, { useState, Component, useEffect } from "react";
import {
  Alert,
  DatePicker,
  Form,
  Input,
  Button,
  Select,
} from "antd";
import data from "../../data.json";
import { useDispatch, useSelector } from "react-redux";

import HealthDetails from "../maj_inscription/health-details";
import { Create } from "../../../redux/actions/CitizenActions";

const { RangePicker } = DatePicker;
const { Option } = Select;




function AppQuestionnaire_Etape3(props) {
  const errors = useSelector((state) => state.errors);
  const dispatch = useDispatch()
  const [message, setmessage] = useState(null)
  const pivot = useSelector(state => state.pivot)

  /* const onChange = e => {
      console.log('radio checked', e.target.value);
      setValue(e.target.value);
    };
   */
  const [form, setform] = useState(null);

  const HandleChange = (e) => {
    setform({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onFinish = () => {
    dispatch(Create(form))
  };

  useEffect(() => {
    setmessage(pivot)
  }, [message])
  
  return (
    <>
    {pivot  === null ? (
      <Form name="normal_login" className="login-form" onFinish={onFinish}>
      <div id="step1">
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <Form.Item label="Cin">
            <Input
              style={{ width: "100%" }}
              name="cin"
              onChange={HandleChange}
            />
            <br />
            {errors && <span style={{ color: "red" }}>{errors.cin}</span>}
          </Form.Item>
          <Form.Item label="date de naissance">
            <Input
              style={{ width: "100%" }}
              name="date_of_birth"
              type="date"
              onChange={HandleChange}
            />
            <br />
            {errors && (
              <span style={{ color: "red" }}>{errors.date_of_birth}</span>
            )}
          </Form.Item>
          <Form.Item label="Téléphone">
            <Input
              style={{ width: "100%" }}
              name="phone"
              onChange={HandleChange}
            />
            <br />
            {errors && <span style={{ color: "red" }}>{errors.phone}</span>}
          </Form.Item>

          <Form.Item name="email" label="email">
            <Input
              style={{ width: "100%" }}
              name="email"
              onChange={HandleChange}
            />
            <br />
            {errors && <span style={{ color: "red" }}>{errors.email}</span>}
          </Form.Item>
        </div>

        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <Form.Item label="Genre">
            <select
              style={{ width: "160px" }}
              name="sexe"
              onChange={HandleChange}
              className="ant-input"
            >
              <option value="Femme" selected>Femme</option>
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
            />
            <br />
            {errors && <span style={{ color: "red" }}>{errors.firstname}</span>}
          </Form.Item>
          <Form.Item label="Prénom">
            <Input
              style={{ width: "100%" }}
              name="lastname"
              onChange={HandleChange}
            />
            <br />
            {errors && <span style={{ color: "red" }}>{errors.lastname}</span>}
          </Form.Item>
        </div>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <Form.Item label="Nom père">
            <Input
              style={{ width: "80%" }}
              name="father_lastname"
              onChange={HandleChange}
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
            />
            <br />
            {errors && (
              <span style={{ color: "red" }}>{errors.mother_firstname}</span>
            )}
          </Form.Item>
          <Form.Item label="nom mère">
            <Input
              style={{ width: "80%" }}
              name="mother_lastname"
              onChange={HandleChange}
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
            >
              <option value="Tunis" selected>Tunis</option>
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
            >
              <option value="Tunis" selected>Tunis</option>
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
            >
              <option value="Tunis" selected>Tunis</option>
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
          <HealthDetails onChange={HandleChange} errors={errors}/>
        </div>
      </div>
      <Button type="primary" htmlType="submit" className="login-form-button" style={{ width: "120px" }}>
        Valider
      </Button>
    </Form>
    ): 

    <Alert
      message="Success Tips"
      description={message}
      type="success"
      showIcon
    />}
    </>
  );
}

export default AppQuestionnaire_Etape3;
