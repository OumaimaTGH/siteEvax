import React, { useState } from 'react';
import { DownloadOutlined } from '@ant-design/icons';
import './header.css';
import { Anchor, Drawer, Button } from 'antd';
import logo from './logo2.png';
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
    
      <div className="header" >
        <div className="logo">
        <img src={logo} alt="Logo" />
        </div>
        <div className="mobileHidden">
          <Anchor targetOffset="65">
          
            
            <div className="lang">
            <Dropdown overlay={menu}>
            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
            Français <DownOutlined />
            </a>
           </Dropdown>,
           </div>
         </Anchor>
        </div>
        <div className="mobileVisible">
          <Button type="primary" onClick={showDrawer}>
            <i className="fas fa-bars"></i>
          </Button>
         
        </div>
      </div>
  
  );
}

export default AppHeader;