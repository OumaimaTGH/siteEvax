import React, { Component } from 'react'
import './Question.css'
import 'antd/dist/antd.css';
import { Row, Col, Card } from 'antd';
import { BarChartOutlined, QuestionCircleOutlined, DatabaseOutlined,ExclamationCircleOutlined,
        EnvironmentOutlined  } from '@ant-design/icons';


import img1 from "../../Assets/syringe.png";
export const image_name = img1;

function Question () {
    
        return (
            <div className="bigdiv">
                <div><p type="message" style={{fontSize:'40px', fontWeight:'bold', color:'#e92130c4', textAlign:'center'}}>Questions fréquentes sur EVAX</p></div>
               <div className="site-card-wrapper ">
                <Row gutter={16, 16}>
                <div className="box item">
                <Col className="img-container" span={8}>
                    <Card image="Card image " bordered={false} style={{ width: 300, height: 200 }}>
                    <BarChartOutlined type="message" style={{ fontSize: '50px', color: '#e92130'}} theme="outlined" className="img-center item-img"/>
                    <p type="message" style={{ fontSize: '15px', fontWeight:'bold', color: 'grey', width:'300px',marginLeft:'-20px', textAlign:'center' }} theme="outlined">Quels sont les grands principes de la stratégie de vaccination contre la COVID-19 ?</p>
                    <div>
                    <ul>
                                        <p type="message" style={{ fontSize: '15px', width:'300px', textAlign:'left', marginLeft:'-40px' }} theme="outlined">La Tunisie s’est fixé les principes suivants:</p>
                                        <li>
                                        un accès équitable pour des vaccins gratuits, efficaces, sûrs et de qualité approuvés par les données scientifiques en temps opportun
                                        </li>
                                        <li>une prise de décision personnelle basée sur des données transparentes et compréhensibles</li>
                    </ul>
                    </div>
                    
                    </Card>
                </Col>
                </div>

                <div className="box item">
                <Col span={8} className="img-container">
                    <Card image="Card image " bordered={false} style={{ width: 300 }}>
                    <QuestionCircleOutlined type="message" style={{ fontSize: '50px', color: '#e92130' }} theme="outlined" className="img-center item-img" />
                    <p type="message" style={{ fontSize: '15px', fontWeight:'bold', color: 'grey', width:'300px',marginLeft:'-20px', textAlign:'center'}}>
                    Comment s’enregistrer pour la vaccination Covid-19 ?</p>
                    <div style={{marginTop:'5rem'}}>
                                    <p type ="message" style={{textAlign:'center'}}>Website : www.evax.tn</p>
                                    <p type ="message" style={{textAlign:'center'}}>SMS : 85355</p>
                                    <p type ="message" style={{textAlign:'center'}}>USSD : *2021#</p>
                                    
                    </div>
                    
                    </Card>
                </Col>
                </div>
                <div className="box item">
                <Col span={8} className="img-container">
                    <Card image="Card image" bordered={false} style={{ width: 300 }}>
                    <img src={img1} style={{height:60, width:60, marginLeft:'90px', marginTop:'-5px', marginBottom: '3.5em'}} />
                    {/*<EditOutlined type="message" style={{ fontSize: '50px', color: '#e92130' }} theme="outlined" className="img-center item-img" />*/}
                    <p type="message" style={{ fontSize: '15px', fontWeight:'bold', color: 'grey', width:'300px',marginLeft:'-20px', textAlign:'center'}}>
                    Quels sont les objectifs de la vaccination ?</p>
                        <div style={{marginTop:'3rem'}}>
                        Le premier objectif de la vaccination, c’est de faire baisser le nombre des formes graves de COVID-19. Les résultats des études cliniques des candidats vaccins semblent converger pour démontrer un fait principal : la vaccination permet de réduire massivement la mortalité due au virus et à ses formes graves.
                        </div>
                   
                    
                    </Card>
                </Col>
                </div>


                <div className="box item">
                <Col className="img-container" span={8}>
                    <Card image="Card image " bordered={false} style={{ width: 300 }}>
                    <DatabaseOutlined type="message" style={{ fontSize: '50px', color: '#e92130' }} theme="outlined" className="img-center item-img"/>
                    <p type="message" style={{ fontSize: '15px', fontWeight:'bold', color: 'grey', width:'300px',marginLeft:'-20px', textAlign:'center'}}>La vaccination contre la Covid-19 sera-t-elle gratuite ?</p>
                                 <div style={{marginTop:'3rem'}}>
                                 Oui. La vaccination sera gratuite pour tous en Tunisie, mais selon la priorité établie par l es autorités.
                                      
                    </div>
                    
                    </Card>
                </Col>
                </div>



                <div className="box item">
                    <Col span={8} className="img-container">
                        <Card image="Card image " bordered={false} style={{ width: 300 }}>
                        <EnvironmentOutlined type="message" style={{ fontSize: '50px', color: '#e92130' }} theme="outlined" className="img-center item-img" />
                        <p type="message" style={{ fontSize: '15px', fontWeight:'bold', color: 'grey', width:'300px',marginLeft:'-20px', textAlign:'center'}}>
                        Où se faire vacciner ?</p>
                        <div style={{marginTop:'3rem'}}>
                            <p className="text-deco">
                            Il y aura environ 200 centres de vaccination à raison de :
                            1 à 2 grand (s) centre(s) par gouvernorat ouvert toute la semaine
                            Et un centre par délégation à identifier par direction régionale de la santé ouvert le weekend
                            </p>
                        </div>
                        
                        </Card>
                    </Col>
                </div>
                <div className="box item">
                <Col span={8} className="img-container">
                    <Card image="Card image" bordered={false} style={{ width: 300 }}>
                    <ExclamationCircleOutlined type="message" style={{ fontSize: '50px', color: '#e92130' }} theme="outlined" className="img-center item-img" />
                    <p type="message" style={{ fontSize: '15px', fontWeight:'bold', color: 'grey', width:'300px',marginLeft:'-20px', textAlign:'center'}}>
                    Que faire en cas de problème lors de l'inscription?</p>
                        <div style={{marginTop:'2rem'}}>
                        Un numéro vert gratuit a été mis en place pour accompagner les citoyens tout au long de la campagne de vaccination. Le numéro vert : 80102021, ouvert du lundi au vendredi de 09h à 17h
                        </div>
                    
                    </Card>
                </Col>
                </div>
                </Row>
            </div>,
            
        </div>


        )
    
}
export default Question ;
