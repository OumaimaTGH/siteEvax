import React from 'react'
import 'antd/dist/antd.css'
import './citoyen.css'
import logo from '../../Assets/images/logo3.png'
import { Image,Card,Typography,Steps,Input,Button } from 'antd';
import {RollbackOutlined, LoginOutlined} from '@ant-design/icons'
import num from '../../Assets/images/numero-vert.20f0a520.png'

export const image_name = num;

const { Title } = Typography;
const { Step } = Steps;

function CnxCodeCityoen(){
    return(
        <div className="container-01">
        <div className="logo1">
        <Image src={logo} alt="Logo" preview={false} />
        </div>
        <Card className="card1" style={{ width: 700, height:400}} title={<Title level={2}>Veuillez vous connecter à votre espace citoyen
</Title>}>
<Steps style={{marginTop:'50px'}} progressDot current={1}>
      <Step title={<Title level={5}>Numéro <br/>d'inscription EVAX</Title>} status="finish" />
      <Step className="dot" title={<Title level={5}>Code de<br/> vérification</Title>} status="finish"/>
    </Steps>

    <Input className="input" placeholder="Code de vérification" />


    <Button className="btn-retour" href="/CnxEspaceCitoyen">
        <RollbackOutlined  type="message" theme="outlined" className="icon-next"/>Retour</Button>
    <Button className="btn-cnx" href="/InfosEspaceCitoyen">
        <LoginOutlined type="message" theme="outlined" className="icon-next"/>Connexion</Button>

    
  </Card>

  <Image src={num} alt="Logo" preview={false} className="num"/>
        </div>

    )
}
export default CnxCodeCityoen;