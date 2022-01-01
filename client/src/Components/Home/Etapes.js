import React from 'react'
import 'antd/dist/antd.css'
import './Etapes.css'
import { Card, Row } from 'antd';

function Etape (){
    
  
        
        return (
            <div className="container3">
                <p className="p1" type="message" style={{fontSize:'30px', color:'white', textAlign:'center', marginBottom:'0em', marginTop:'3em', paddingTop:'100px'}}>Comment faire pour se vacciner</p>
                <p type="message" style={{fontSize:'40px', fontWeight:'bold', color:'white', textAlign:'center'}}>
                ETAPES DE VACCINATION CONTRE LA COVID-19</p>
            <Row gutter={16}>
                <div>
                <Card span={8} style={{ width: 80, height:80, marginBottom: "10px", borderRadius: "120px", overflow: "hidden", marginLeft:"60px"}} className="card-1">
                    <p className="etape">01</p>
                </Card>
                <p className="p2" style={{fontWeight:'bold'}}>INSCRIPTION</p>
                <p className="p3">La 1ère étape est de s'inscrire</p>
                </div>


                <div>
                <Card span={8} style={{ width: 80, height:80, marginBottom: "10px", borderRadius: "120px", overflow: "hidden", marginLeft:"200px"}} className="card-1">
                    <p className="etape">02</p>
                </Card>
                <p className="p2" style={{fontWeight:'bold', marginLeft:'170px'}}>Affectation RDV</p>
                <p className="p3" style={{marginLeft:'90px', width:300}}>La 2ème étape est de recevoir une convocation dans un centre de vaccination</p>
                </div>

                <div>
                <Card span={8} style={{ width: 80, height:80, marginBottom: "10px", borderRadius: "120px", overflow: "hidden", marginLeft:"200px"}} className="card-1">
                    <p className="etape">03</p>
                </Card>
                <p className="p2" style={{fontWeight:'bold', marginLeft:'170px'}}>VACCINATION</p>
                <p className="p3" style={{marginLeft:'80px', width:320}}>La 3ème étape est le vaccin (primo-vaccination, puis vaccin de rappel)</p>
                </div>

                <div>
                <Card span={8} style={{ width: 80, height:80, marginBottom: "10px", borderRadius: "120px", overflow: "hidden", marginLeft:"170px"}} className="card-1">
                    <p className="etape">04</p>
                </Card>
                <p className="p2" style={{fontWeight:'bold', marginLeft:'140px'}}>SUIVI</p>
                <p className="p3" style={{ marginLeft:'60px',width:300}}>La 4ème étape est le suivi du vaccin et le téléchargement de l'attestation de vacccination</p>
                </div>

            </Row>
                
                
        
        
            </div>
        );
    
}

export default Etape;