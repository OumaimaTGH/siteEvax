import React from 'react';
import './footer.css';
import { BackTop } from 'antd';
import logo from'./logo2.png'

function AppFooter() {
  return (
    <div className="container-fluid">
      <div className="footer">
        <div className="logo">
        <img src={logo} alt="Logo" />

        </div>
        
        <div className="copyright">Copyright &copy; 2021</div>
        <BackTop>
          <div className="goTop"><i className="fas fa-arrow-circle-up"></i></div>
        </BackTop>
      </div>
    </div>
  );
}

export default AppFooter;