import React from 'react'
import 'antd/dist/antd.css'
import './infos.css'

import logo from '../../../Assets/images/logo3.png'
import { Image,Menu, Dropdown,Button,
    Popover,Input,Typography,Select,
    Card,Row, Col,Steps,Divider} from 'antd';
import { DownOutlined } from '@ant-design/icons';
import num from '../../../Assets/images/numero-vert.20f0a520.png'

export const image_name = num;

const { Title } = Typography;

const { Option } = Select;

const { Step } = Steps;

const { TextArea } = Input;

const content = (
    <div>
      <p><h5><p style={{color:'red'}}>*</p>Ajouter un nouvel abus</h5></p>
      <TextArea className="text-area" rows={3} />
      <div>
      <Button className="btn-annuler" href="/InfosEspaceCitoyen">Annuler</Button>
      <Button className="btn-connection" href="/"><span style={{color:'white'}}>Connection</span></Button>
      </div>
      
    </div>
  );

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  const content2 = (
    <div>
      <p><h5><p style={{color:'red'}}>*</p>type de reclamation</h5></p>
      <Select className="select" onChange={handleChange}>
      <Option value="vaccination">Vaccination</Option>
      <Option value="Rappel">Rappel</Option>
      <Option value="Inscription">Inscription</Option>
      <Option value="Espace citoyen">Espace citoyen</Option>
    </Select>
      <p><h5><p style={{color:'red'}}>*</p>Ajouter une nouvelle reclamation</h5></p>
      <TextArea className="text-area" rows={3} />
      <div>
      <Button className="btn-annuler" href="/InfosEspaceCitoyen">Annuler</Button>
      <Button className="btn-connection" href="/"><span style={{color:'white'}}>Envoyer</span></Button>
      </div>
      
    </div>
  );

const menu = (
    <Menu>
         
      <Menu.Item disabled >
      <button className="sous-btn" disabled>
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          Remplir des questionnaires de suivi médicale
        </a>
        </button>
      </Menu.Item>
      
      <Menu.Item>
      <button className="sous-btn">
      <Popover content={content} title={<Title level={3}>Déclarer des abus ou des écarts<br/> lors du processus de vaccination
      </Title>} trigger="click">
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          Déclarer des abus ou des écarts lors du processus de vaccination
        </a>
    </Popover>
        </button>
      </Menu.Item>

      <Menu.Item>
      <button className="sous-btn">
          <Popover content={content2} title={<Title level={3}>Reclamation</Title>} trigger="click">
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          Réclamation
        </a>
        </Popover>
        </button>
      </Menu.Item>
      
    </Menu>
  );



  const menu2 = (
    <Menu style={{borderRadius:'20px', width:'120px', marginLeft:'-23px'}}>
      <Menu.Item style={{textAlign:'center'}} key="0">
        <a href="">TN Arabe</a>
      </Menu.Item>
      <Menu.Item style={{textAlign:'center'}} key="1">
        <a href="">EN Anglais</a>
      </Menu.Item>
      <Menu.Item style={{textAlign:'center'}} key="2">FR Français</Menu.Item>
    </Menu>
  );
  
  

function InfosCitoyen(){
    
    return(
        <div className="container-02">
<Divider/>
        <div className="nav">
            <div>
            <Image className="logo1" src={logo} alt="Logo" preview={false} />
            
            <Image src={num} alt="Logo" preview={false} className="numero"/>
            </div>

            <Button className="btn-reclamation">
            <Dropdown overlay={menu}>
                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                Reclamation <DownOutlined />
                </a>
            </Dropdown>
            </Button>

            <Button className="btn-lg">
            <Dropdown overlay={menu2} trigger={['click']}>
    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
      FR Français <DownOutlined />
    </a>
  </Dropdown>
            </Button>
        </div>

        <div>
        <Card className="card01">
        <Row gutter={16}>
      <Col className="gutter-row" span={6}>
        <div style={{fontSize:'20px', fontWeight:'bold'}}>Informations personnelles</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <Button className="btn01">Modifier vos données personnelles</Button>
      </Col>
      <Col className="gutter-row" span={6}>
        <Button className="btn02">Parrainer enfants</Button>
      </Col>
      <Col className="gutter-row" span={6}>
        <Button className="btn03"><p style={{color:'red'}}>Cloturer mon dossier</p></Button>
      </Col>
    </Row>
 

    <Row className="row2" gutter={16}>
      <Col className="gutter-row" span={6}>
        <div className="text00"><b>N°EVAX</b> : 123456789</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div className="text01"><b>Nom et Prénom</b> : Mariem Nsir</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div className="text02"><b>Carte d'indentité nationale</b> : 01223344</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div className="text03"><b>Date de naissance</b> : 26/09/1997</div>
      </Col>
    </Row>
  </Card>

  <Card className="card02">
  <Row className="row2" gutter={16}>
      <Col className="gutter-row" span={6}>
        <div style={{fontSize:'20px', fontWeight:'bold',marginTop:'-5px'}}>Dossier de vaccination</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <Button></Button>
      </Col>
      <Col className="gutter-row" span={6}>
        <Button className="btn-rdv">Rendez-vous confirmé</Button>
      </Col>
      <Col className="gutter-row" span={6}>
        <Button className="btn-effets">Déclarer les effets indésirables</Button>
      </Col>
    </Row>

    <Row>
    <Steps>
          <Step status="finish" title="Rendez-vous confirmé" />
          <Step status="process" title="Vaccin réalisé" />
          <Step status="process" title="Rendez-vous du rappel confirmé" />
          <Step status="wait" title="Vaccin du rappel confirmé" />
          <Step status="wait" title="Certificat et pass vaccinal" />
        </Steps>
    </Row>

  </Card>


        </div>

        </div>

    )
}
export default InfosCitoyen;
