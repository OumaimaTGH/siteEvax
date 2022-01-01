import React from "react";
import "./views/Home";
import Home from "./views/Home";
import Faq from "./views/Faq";

import "./App.css";
import "antd/dist/antd.css";

import { BrowserRouter } from "react-router-dom";

import { Switch, Route } from "react-router-dom";
// import AppHeader from './Components/common/header';
// import AppFooter from './Components/common/footer';
import store from "./redux/store";
import AppAdmin from "./views/AppAdmin";
import App from "./App";
import { Layout, Breadcrumb } from "antd";
import { Provider } from "react-redux";
import Login from "./pages/Login";
import setAuthToken from "./util/setAuthToken";
import jwt_decode from "jwt-decode";
import { LogoutUser, set_current_user } from "./redux/actions/AuthActions";
import PrivateRoute from "./util/privateRoute";
const { Content } = Layout;

if (window.localStorage.jwtToken) {
  setAuthToken(window.localStorage.jwtToken);

  const decode = jwt_decode(localStorage.jwtToken);

  store.dispatch(set_current_user(decode));

  const currentDate = Date.now() / 1000;

  if (decode.exp < currentDate) {
    store.dispatch(LogoutUser());
    //store.dispatch(ClearCurrentProfile());
    window.location.href = "/login";
  }
}

function App2() {
  return (
    <Provider store={store}>
      <Layout className="mainLayout">
        <Content>
          <BrowserRouter>
            <Switch>
              <Route exact path="/login" component={Login} />
              <Route path="/Visiteur" component={App} />
              <Route path="/AppAdmin/home" component={Home} />
              <PrivateRoute  path="/AppAdmin" component={AppAdmin} />
            </Switch>
          </BrowserRouter>
        </Content>
      </Layout>
    </Provider>
  );
}

export default App2;
