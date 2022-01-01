import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Admin from "../Admin";
import { Layout } from "antd";
import AppHeader from "../Components/header_admin/header";
import AppFooter from "../Components/footer_admin/footer";
const { Header, Content, Footer } = Layout;

const AppAdmin = () => {
  return (
    <Layout className="mainLayout">
      <Header>
        <AppHeader />
      </Header>
      <Content>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Admin} />
          </Switch>
        </BrowserRouter>
      </Content>
      <Footer>
        <AppFooter />
      </Footer>
    </Layout>
  );
};

const mapStateToProps = (state) => {
  return {
    isLogin: state.isLogin,
  };
};

export default AppAdmin;
