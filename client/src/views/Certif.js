import React, { useState } from "react";
import {useDispatch, useSelector} from 'react-redux'
import "antd/dist/antd.css";

import {  Form, Input, Button } from "antd";
import {ConnectCitizen} from '../redux/actions/CitizenActions'
function Certif() {
  const [form, setform] = useState({})
  const [form_connect, setform_connect] = useState({})
  const errors = useSelector(state => state.errors)
  const dispatch = useDispatch()
  const HandleChangeConnect = (e) => {
    setform_connect({
      ...form_connect,
      [e.target.name]: e.target.value,
    });
  };
  const printDiv = (divName)=> {
    var printContents = document.getElementById(divName).innerHTML;
    var originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();

    document.body.innerHTML = originalContents;
}

  const onConnect = async () => {
    await dispatch(ConnectCitizen(form_connect, setform));
  };
  return (
    <>
      
       <div style={{ textAlign: "center", marginTop: "20px" }}>
       <h3>Espace certification sanitaire</h3>
       </div>
      {Object.keys(form).length === 0 ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Form
          name="citizen-connect"
          className="login-form"
          onFinish={onConnect}
        >
         
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
        </div>
      ) : (
        <>
        {
          form.vaccinated ? (
            <div>
            <div style={{ textAlign: "center" }}>
            <Button type="primary" style={{ width: "120px" }} onClick={()=>printDiv('certif')}>imprimé</Button>
    
            </div>
             <div style={{ displat: "flex" }} id="certif">
              <div
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "50px 50px 50px 50px",
                }}
              >
                <img src="/capture.png" width="100%" alt="" />
              </div>
              <div
                style={{
                  position: "absolute",
                  marginTop: "-51%",
                  marginLeft: "44%",
                  fontFamily: "sans-serif",
                }}
              >
                <span
                  style={{ fontSize: "24px", fontWeight: "bold" }}
                  className="name"
                >
                  {form && form.firstname + ' '  +form.lastname}
                </span>
              </div>
              <div
                style={{
                  position: "absolute",
                  marginTop: "-55.3%",
                  marginLeft: "53%",
                  fontFamily: "sans-serif",
                }}
              >
                <span
                  style={{ fontSize: "24px", fontWeight: "bold" }}
                  className="id"
                >
                  {form && form.authenticate_code}
                </span>
              </div>
              <div
                style={{
                  position: "absolute",
                  marginTop: "-48%",
                  marginLeft: "45%",
                  fontFamily: "sans-serif",
                }}
              >
                <span
                  style={{ fontSize: "24px", fontWeight: "bold" }}
                  className="date"
                >
                  {form && form.date_of_birth}
                </span>
              </div>
              <div
                style={{
                  position: "absolute",
                  marginTop: "-44%",
                  marginLeft: "45%",
                  fontFamily: "sans-serif",
                }}
              >
                <span
                  style={{ fontSize: "24px", fontWeight: "bold" }}
                  className="father"
                >
                  
                </span>
              </div>
            </div>
            </div>
          ):"vous n'êtes pas vacciné"
        }
        </>
       
      )}
    </>
  );
}

export default Certif;
