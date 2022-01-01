import React from 'react';
import './views/Home';
import Home from './views/Home';
import Faq from './views/Faq';

import './App.css';
import 'antd/dist/antd.css';

import { BrowserRouter } from 'react-router-dom';
import AppInscription from './views/inscription';
import AppInsCitoyenTitulaire from './views/inscitoyenTitulaire';
import AppInsCitoyenNonTitulaire from './views/inscitoyenNonTitulaire';
import AppInsCitoyenEtranger from './views//inscitoyenEtranger';
import { Switch, Route } from 'react-router-dom';
// import AppHeader from './Components/common/header';
// import AppFooter from './Components/common/footer';
import AppContact from './views/contact';
import AppHeader from './Components/header/header';
import AppFooter from './Components/footer/footer';

import majInscription from './views/majInscription';
import AppInscriptionpharmacie from './views/inscriptionPharmacie';
import AppAdmin from './views/AppAdmin'
import {Layout, Breadcrumb } from 'antd';
import AppCnxCitoyen from './views/CnxCitoyen';
import AppCnxCodeCitoyen from './views/CnxCodeCitoyen';
import AppInfosEspaceCitoyen from './views/InfosCitoyen';
import Certif from './views/Certif';
const { Header, Content, Footer } = Layout;

function App() {
  return (
 
<switch>


    <Layout className="mainLayout">
      <Header>
        <AppHeader/>
      </Header>
    
     <Content>
    
      <BrowserRouter>
      <Switch>

          <Route path="/Visiteur/CnxEspaceCitoyen" component={AppCnxCitoyen}/>
          <Route path="/Visiteur/CnxCodeEspaceCitoyen" component={AppCnxCodeCitoyen}/>
          <Route path="/Visiteur/InfosEspaceCitoyen" component={AppInfosEspaceCitoyen}/>

          <Route path="/Visiteur/accueil" component={Home} />


          <Route path="/Visiteur/faq" component={Faq} />
          

          <Route path="/Visiteur/CnxEspaceCitoyen" component={AppCnxCitoyen}/>
          <Route path="/Visiteur/CnxCodeEspaceCitoyen" component={AppCnxCodeCitoyen}/>

          <Route path="/Visiteur/inscription" component={AppInscription} />
          <Route path="/Visiteur/InsCitoyenTitulaire" component={AppInsCitoyenTitulaire} />
          <Route path="/Visiteur/InsCitoyenNonTitulaire" component={AppInsCitoyenNonTitulaire} />
          <Route path="/Visiteur/InsCitoyenEtranger" component={AppInsCitoyenEtranger} />
          <Route path="/Visiteur/contact" component={AppContact} />

          <Route path="/Visiteur/maj_inscription" component={majInscription} />

          <Route path="/Visiteur/certif" component={Certif} />

          <Route path="/Visiteur/pharmacy" component={AppInscriptionpharmacie} />

      </Switch>
      </BrowserRouter>
   
      </Content>
       <Footer>
        <AppFooter/>  
      </Footer>      
    </Layout>
    
    </switch>
);
}

export default App;