import React, { useState } from 'react';
import { DownloadOutlined } from '@ant-design/icons';
import './header.css';
import { Anchor, Drawer, Button } from 'antd';
import logo from '../../Assets/images/logo2.png';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        Arabe
      </a>
    </Menu.Item>
    
  </Menu>
);
const { Link } = Anchor;

function AppHeader() {
    
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className="container-fluid">
      <div className="header">
        <div className="logo">
        <img src={logo} alt="Logo" />
        </div>
        <div className="mobileHidden">
        
          <Anchor targetOffset="65">
            <div className="menuu">
            <Link href="/Visiteur/accueil" title="Accueil" />
            <Link href="/Visiteur/inscription" title="S'inscrire" />
            <Link href="/Visiteur/faq" title="FAQ" />
            <Link href="/Visiteur/pharmacy" title="Inscription pharmacie" />
            <Link href="/Visiteur/contact" title="Contactez-nous" />
            
            <Button href="/Visiteur/CnxEspaceCitoyen" id='cit' type="danger" shape="round" >
            Espace Citoyen
            
            </Button>
            <Dropdown overlay={menu}>
              <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                Français <DownOutlined />
              </a>
            </Dropdown>
            </div>
         </Anchor>
        </div>
        <div className="mobileVisible">
          <Button type="primary" onClick={showDrawer}>
            <i className="fas fa-bars"></i>
          </Button>
          <Drawer
            placement="right"
            closable={false}
            onClose={onClose}
            visible={visible}
          >
            <Anchor targetOffset="65">
              <Link href="#hero" title="Home" />
              <Link href="#about" title="About" />
              <Link href="#feature" title="Features" />
              <Link href="#works" title="How it works" />
              <Link href="#faq" title="FAQ" />
              <Link href="#pricing" title="Pricing" />
              <Link href="#contact" title="Contact" />
            </Anchor>
          </Drawer>
        </div>
      </div>
    </div>
  );
}

export default AppHeader;