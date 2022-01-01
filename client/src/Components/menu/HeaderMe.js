import React from 'react';
import { useDispatch } from 'react-redux';
import { Avatar, Dropdown, Menu } from 'antd';
import { LogoutUser } from '../../redux/actions/AuthActions';


const HeaderMe = (props) => {
  const dispatch = useDispatch()
  const menu = (
    <Menu>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://localhost:3000/dashboard"
        >
           Info de l'administrateur 
        </a>
      </Menu.Item>
      <Menu.Item onClick={dispatch(LogoutUser)} danger>
        Log Out
      </Menu.Item>
    </Menu>
  );
  return (
    <div>
      <Dropdown overlay={menu}>
        <div>
        Administrateur 
         <Avatar
            onClick={(e) => e.preventDefault()}
            className="ant-dropdown-link"
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          />
        </div>
      </Dropdown>
    </div>
  );
};



export default HeaderMe;
