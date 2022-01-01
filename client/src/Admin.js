import React, { useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';

import Dashboard from './pages/Dashnoard';
import RendezVous from './pages/RendezVous';
import SideMenu from './Components/menu/SideMenu';
import BreadcrumbMe from './Components/menu/BreadcrumbMe';
import HeaderMe from './Components/menu/HeaderMe';
import Centresdevaccination from './pages/Centresdevaccination';
import Pharmacie from './pages/Pharmacie';
import Vaccin from './pages/Vaccin';
import Citizen from './pages/Citizen';
import Operator from './pages/Operator';

import JournéesPortesOuvertes from './pages/JournéesPortesOuvertes';
import GestionDesVolontaires from'./pages/GestionDesVolontaires';
const { Header, Content, Footer } = Layout;

const Admin = (props) => {
  const auth = useSelector(state => state.auth)
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <SideMenu />
      <Layout className="site-layout">
        <Header
          className="site-layout-background header"
          style={{ padding: '0 5%' }}
        >
          <HeaderMe />
        </Header>
        <Switch>
          <Content style={{ margin: '0 16px' }}>
            <BreadcrumbMe />
            <div style={{ padding: 24, minHeight: 560, margin: '16px 0' }}>
              <Route  path="/AppAdmin/dashboard" component={Dashboard} />
              <Route  path="/AppAdmin/rendezvous" component={RendezVous} />
              <Route  path="/AppAdmin/centresdevaccination" component={Centresdevaccination} />
              <Route  path="/AppAdmin/pharmacie" component={Pharmacie} />
              <Route  path="/AppAdmin/vaccin" component={Vaccin} />
              <Route  path="/AppAdmin/journéesPortesOuvertes" component={JournéesPortesOuvertes} />
              <Route  path="/AppAdmin/gestionDesVolontaires" component={GestionDesVolontaires} />
              <Route  path="/AppAdmin/citizen" component={Citizen} />
              <Route  path="/AppAdmin/Operator" component={Operator} />

            </div>
          </Content>
        </Switch>
      </Layout>
    </Layout>
  );
};



export default Admin;
