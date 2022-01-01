import React from "react";
import { Card, Col, Row ,Typography} from 'antd';
import './Contact.css';
import {WhatsAppOutlined,ChromeOutlined, CommentOutlined, IeOutlined,TabletOutlined} from '@ant-design/icons';

const { Title } = Typography;

function AppContact(){
return(
   <div  className= "contactBlock">
       <div className="container-Fluid">
           {/* <div className="titleHolder">  */}
        {/* //     <br/>
        // <br/>
        // <br/>
        // <br/>
        // <br/>
        // <br/>  */}
  <div className="site-card-wrapper">
    <Row gutter={40}>
      <Col span={10}>
       

        <Card  title= {<Title level={1}>Contactez nous pour<br/> plus d'information</Title>} bordered={false}  >
        
        Appel Gratuit :  <br/> <br/>
         Centre d'appel disponible Du lundi au Vendredi de 09h à 17h      
         <br/>
         <br/>
        <WhatsAppOutlined />   +(216) 8010 20 21
        <br/>
            <br/> 
            <IeOutlined />    www.evax.tn
           </Card>
      </Col>
      <Col style={{marginLeft:'120px'}} span={10}>
        <Card title={<Title level={1}>Voulez-vous vous<br/> inscrire ?</Title>} bordered={false}>
        Pour vous inscrire vous pouvez :
        <br/>
        <br/>

        <TabletOutlined />     Composer le #2021*
        
        {/* <ShakeOutlined />    */}
         <br/>
         <br/>
        {/* <WechatOutlined /> */}
        
        <CommentOutlined />   Envoyer un SMS à 85 355

<br/>
<br/>

        <ChromeOutlined /> 
        
            <a href="https://www.evax.tn/"  >  Visiter notre site Evax
        </a>
             </Card>
      </Col>
      
    </Row>
  </div>
  </div>
   </div> 
  // </div> 
    );
}
export default AppContact;