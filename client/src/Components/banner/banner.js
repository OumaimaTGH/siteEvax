import React, { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Card, Col, Row, Carousel, Image, Button } from 'antd';
import 'antd/dist/antd.css';
import './banner.css';
import {UserOutlined,MedicineBoxOutlined,GlobalOutlined, 
    CarryOutOutlined,FileAddOutlined,UserAddOutlined} from '@ant-design/icons';

import img1 from "../../Assets/syringe.png";
import img2 from "../../Assets/images/box-img1.jpg";
import img3 from "../../Assets/images/box-img2.jpg";
import img4 from "../../Assets/images/box-img3.jpg";
//background
import i1 from "../../Assets/images/bg-img2.png";
import i2 from "../../Assets/images/bg-img3.png";
import i3 from "../../Assets/images/bg-img1.png";


        export const image_name = img1;
        export const image_name2 = img2;
        export const image_name3 = img3;
        export const image_name4 = img4;
        //background
        export const image_name5 = i1;
        export const image_name6 = i2;
        export const image_name7 = i3;

//-------image carousel--------
        const contentStyle = {
            height: '250px',
            width:'250px',
            color: '#fff',
            lineHeight: '160px',
            textAlign: 'center',
            background: '#364d79'
          };

         

function banner (props) {
    


function timeout(dateTime) {

    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    dateTime = date+' '+time;
    return dateTime ;         
}

window.onload = function() {
    document.getElementById("dateTime").innerHTML = timeout();            
}

//------ background images------------

function changeImage() {
var img = document.getElementById("img");
img.src = images[x];
x++;        
if(x >= images.length) {
x = 0;
} 
//fadeImg(img, 100, true);
setTimeout(function(){changeImage();}, 5000);
}
var images = [], x = 0;
images[0] = i2;
images[1] = i3;
images[2] = i1;
setTimeout(function(){changeImage();}, 5000);
        
        return (
    <div className="container1">
        <img id="img" alt="" src={i1} style={{height:'650px', width:'100%'}}/>
    <Row style={{height: 590, width:'100%'}} gutter={[16,16]}>
    <div >
        <Card  style={{ width: 250,height: 250,marginTop: "80px",marginLeft: "150px"}} className="card1">

                        <Carousel autoplay>
                    <div>
                    <h3 style={contentStyle}>
                        <Image width={250} alt="" src={img2}/></h3>
                    </div>
                    <div>
                    <h3 style={contentStyle}>
                    <Image width={250} src={img3}/>
                    </h3>
                    </div>
                    <div>
                    <h3 style={contentStyle}>
                    <Image width={250} src={img4}/>
                    </h3>
                    </div>
                </Carousel>
        </Card>
    </div>

    <div >
        <Card  style={{ width: 200,height: 250,marginTop: "80px", backgroundColor:'rgb(232,232,232,0.5)'}}>
        <p style={{color:'white', fontSize:25, fontWeight:'bold',marginTop:"-10px", marginLeft:'25px'}}classname="text">Nombre d'inscrits</p>
        <p className="text" style={{fontSize:25, fontWeight:'bold'}}>{props.citizen}</p>
        <p class="text" id="dateTime"></p>
        
        </Card>
    </div>

    
        <Card  style={{ width: 600,height: 250,marginTop: "50px",marginLeft:"80px", backgroundColor:'transparent', border:'none'}}>
        <p style={{color:'white', fontSize:45, fontWeight:'bold', textAlign:'left',lineHeight:'45px', marginTop:"60px"}}>BIENVENUE AU PORTAIL DE VACCINATION CONTRE LA COVID 19</p>
        <p className="text" style={{textAlign:'left', marginTop:'-30px', marginLeft:'5px'}}>Ensemble contre la COVID-19</p>
        </Card>
   


    </Row>

    <Row style={{marginTop:-260}}>
    <div >
        <Card  style={{ width: 450,height: 250,marginLeft: "142px",marginBottom:"58px", backgroundColor:'rgb(232,232,232,0.5)'}}>
        <Row >
        <div className="item2">
                    <Col className="img-container" span={4}>
                    <img src={img1} style={{height:30, width:30, marginLeft:'20px', marginTop:'-5px', marginBottom: '3.5em'}} />
                        <p style={{marginTop: "-50px"}} className="text">Deuxième dose</p>
                    </Col>
         </div>

         <div className="item2 item">
             
                    <Col className="img-container" span={4}>
                    <UserOutlined type="message" theme="outlined" className="icon"/>
                        <p style={{marginTop: "-13px"}} className="text">Vaccination enfants</p>
                    </Col>
         </div>

         <div className="item2 item03">
             
                    <Col className="img-container" span={4}>
                    <MedicineBoxOutlined type="message" theme="outlined" className="icon"/>
                        <p style={{marginTop: "-13px"}} className="text">Effets secondaires</p>
                    </Col>
         </div>
         </Row>

         <div className="item2 item04">
             
                    <Col className="img-container" span={4}>
                    <GlobalOutlined type="message" theme="outlined" className="icon"/>
                        <p style={{marginTop: "-13px"}} className="text">Evax mobilité</p>
                    </Col>
         </div>
        </Card>
    </div>


    <Button  type="danger" shape="round" style={{marginLeft:'80px', width:550, height:50}} icon={<CarryOutOutlined className="icon1"/>} block>
          
          <p className="text1" style={{fontSize: 15,marginTop: '5px',marginLeft: '10px'}}>INSCRIVEZ-VOUS A LA CAMPAGNE DE LA VACCINATION</p>
    </Button>

    <Button shape="round" style={{marginLeft:'674px', width:550, height:50, backgroundColor:'orange', float:'right', marginTop:'-245px'}} icon={<FileAddOutlined  className="icon1"/>} block>
          
          <p className="text1" style={{fontSize: 15,marginTop: '6px',marginLeft: '15px'}}>VACCINATION CHEZ LA PHARMACIE</p>
    </Button>

    <Button shape="round" style={{marginLeft:'674px', width:550, height:50, backgroundColor:'blue', float:'right', marginTop:'-190px'}} icon={<UserAddOutlined className="icon1"/>} block>
          
          <p className="text1" style={{fontSize: 15,marginTop: '-25px',marginLeft: '40px'}}>LISTE DES CABINETS MEDICAUX ET LABORATOIRES DE VACCINATION</p>
    </Button>

    </Row>

    
  
  
    </div>
        )
    
}

export default banner;