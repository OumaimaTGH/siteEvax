import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Layout, Menu } from 'antd';
import "./SideMenu.css";
import {
   PieChartOutlined,
  UserOutlined,
  BankFilled,
  CalendarFilled,
  UsergroupAddOutlined,
  MedicineBoxOutlined
} from '@ant-design/icons';

import { control } from '../../redux/actions';

const { Sider } = Layout;
const { SubMenu } = Menu;

const SideMenu = ({ testFunc }) => {
  const [collapsed, setCollapsed] = useState(false);
  const auth = useSelector(state => state.auth)
  const test = () => {
    testFunc({ ip: '22.22.22.22' });
  };
  
  return (
    <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
    
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        {
          auth.user.role === "1" ? (
           <>
           <Menu.Item key="1" icon={<PieChartOutlined />}>
          <Link to="/AppAdmin/dashboard">Dashboard</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<BankFilled />}>
          <Link to="/AppAdmin/centresdevaccination">Centres De Vaccination</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<BankFilled />}>
          <Link to="/AppAdmin/pharmacie">Pharmacies</Link>
        </Menu.Item>
        <Menu.Item key="4" icon={<UsergroupAddOutlined />}>
          <Link to="/AppAdmin/citizen">Citoyens</Link>
        </Menu.Item>


        <Menu.Item key="5" icon={<CalendarFilled />}>
          <Link to="/AppAdmin/Operator">Operator</Link>
        </Menu.Item>

        <Menu.Item key="6" icon={<UsergroupAddOutlined />}>
          <Link to="/AppAdmin/JournéesPortesOuvertes"> Journées Portes ouvertes</Link>
        </Menu.Item>
        <Menu.Item key="7" icon={<UserOutlined />}>
          <Link to="/AppAdmin/GestionDesVolontaires"> Gestion Des Volontaires</Link>
        </Menu.Item>
        <Menu.Item key="8" icon={<MedicineBoxOutlined />}>
          <Link to="/AppAdmin/vaccin">Les vaccins</Link>
        </Menu.Item>
           </>
          ) : (
            <Menu.Item key="4" icon={<UsergroupAddOutlined />}>
            <Link to="/AppAdmin/citizen">Citoyens</Link>
          </Menu.Item>
          )
        }
        
       
      </Menu>
    </Sider>
  );
};


export default SideMenu;
