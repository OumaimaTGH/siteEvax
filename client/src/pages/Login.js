import React, { useEffect, useState } from "react";
import {useSelector, useDispatch} from 'react-redux'
import AppHeader from "../Components/header_admin/header";
import AppFooter from "../Components/footer_admin/footer";
import { signIn } from "../redux/actions";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Form, Input, Button, Typography } from "antd";
import { Layout } from "antd";
import InputGroup from "../util/InputGroup";
import { LoginUser } from "../redux/actions/AuthActions";
import './login.css';

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

const NormalLoginForm = (props) => {
  const auth = useSelector(state => state.auth)
  const errors = useSelector(state => state.errors)
  const [form, setform] = useState({})
  const dispatch = useDispatch()

  useEffect(() => {
    const redirect = ()=>{
      if(auth.authenticate === true && auth.user.role === 1){
        props.history.push('/AppAdmin')
      }
      if(auth.authenticate === true && auth.user.role === 2){
        props.history.push('/operator')
      }
    }
    redirect()
  })

  const Change_handler = (e)=>{
    setform({
      ...form, 
      [e.target.name]: e.target.value
    })
  }

  const onFinish = (e) => {
    dispatch(LoginUser(form, props.history))
  };

  return (
    <Layout className="mainLayout">
      <Header>
        <AppHeader />
      </Header>
      <Content>
        <div className="aut_form">
        <div className="form">
          <div className="Titre">
            <Title level={4} type="danger">
              Bienvenue dans le tableau de bord d'administration d'evax
            </Title>
          </div>
          <Form
            name="normal_login"
            className="login-form"
            onFinish={onFinish}
          >
             <InputGroup type="text" data-test-id="email"  name="email" placeholder="Tapez votre email"  onChange={Change_handler} errors={errors.email} />
             <InputGroup type="password" data-test-id="password" name="password" placeholder="Tapez votre mot de passe"  onChange={Change_handler} errors={errors.password} />

            <Form.Item>
              <Button
                name="submit"
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Log in
              </Button>
            </Form.Item>
          </Form>
        </div>
        </div>  
      </Content>
      <Footer>
        <AppFooter />
      </Footer>
    </Layout>
  );
};



export default withRouter(NormalLoginForm);
