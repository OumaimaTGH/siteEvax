import React, { Component } from 'react'
import './Statistiques.css'
import 'antd/dist/antd.css';
import { Row, Col, Statistic } from 'antd';
import { CheckCircleOutlined, SmileOutlined } from '@ant-design/icons';
import img1 from "../../Assets/syringe.png";
        export const image_name = img1;

function Statistique () {
  
        return (
            <div className="container2">
                <p type="message" style={{fontSize:'30px',fontWeight:'bold', color:'#e92130c4', textAlign:'center', marginTop:'20px'}}>Le Vaccin En Tunisie</p>
                <p type="message" style={{fontSize:'40px', fontWeight:'bold', color:'Black', textAlign:'center'}}>
                    Plus De Statistiques Sur Les<br/>
                    Campagnes De Vaccination</p>
                   
                    <Row gutter={16}>   
                    <div className="item-2">
                    <Col className="img-container" span={8}>
                    <CheckCircleOutlined type="message" theme="outlined" className="item-2-img"/>
                        
                        <Statistic value={6445849} valueStyle={{color:'grey'}}/>
                        <p className="text-1">Inscrits</p>
                    </Col>
                    </div>
                    
                    <div className="item-2">
                    <Col className="img-container" span={8}>
                    <img src={img1} style={{height:60, width:60, marginLeft:'140px', marginTop:'-5px', marginBottom: '3.5em'}}/>
                    {/*<EditOutlined type="message" theme="outlined" className="item-2-img" />*/}
                    <Statistic value={5258598} valueStyle={{color:'grey'}}/>
                    <p className="text2">Vaccinés 1ère dose</p>
                    </Col>
                    </div>

                    <div className="item-2">
                    <Col className="img-container" span={8}>
                    <SmileOutlined type="message" theme="outlined" className="item-2-img"/>
                    <Statistic value={3178041} valueStyle={{color:'grey'}}/>
                    <p className="text2">Vaccinés 2ème dose</p>
                    </Col>
                    </div>
                    </Row>
                    
                   
            </div>

        )
    
}
export default Statistique ;