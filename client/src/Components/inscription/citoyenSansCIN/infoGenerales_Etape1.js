import React from "react";
import { Form, Input, Button,Select,Row, Col ,Space,DatePicker} from 'antd';
import * as actions from "../../../redux/actions/index";
import { useSelector, useDispatch} from "react-redux"
    const { Option } = Select;
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 9 },
      };
      const layout2 = {
        labelCol: { span: 18 },
        wrapperCol: { span: 9 },
      };
      const tailFormItemLayout = {
        wrapperCol: { offset: 8, span: 16 },
      }
   
        const onFinish = (values) => {
          console.log('Received values of form: ', values);
        };

function AppInfoGenerales_Etape1 (){
  const dispatch=useDispatch()

  /*const listd = async (id) => {
    dispatch(actions.fetchTaskById(id))

  }*/
    return(<div className="block inscriptionBlock">
    <div className="container-fluid">
    <div className="titleHolder">
       <h2>Etape 1 : Données Générales</h2>
       <p>Veuillez utiliser la langue arabe lors de la saisie des données</p>
    </div>
    <Row>
           <Col span={19} offset={4} >
    <Form {...layout}  onFinish={onFinish} >


      <Form.Item
        name="prenom"
        label="Prénom"
        rules={[{ required: true, message: 'Veuillez saisir votre Prénom!', whitespace: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="nom"
        label="Nom"
        rules={[{ required: true, message: 'Veuillez saisir votre nom!', whitespace: true }]}
      >
          <Input />
      </Form.Item>
      <Form.Item
                 name="Date de naissance :"
                 label="Date de naissance :"
                  rules={[
                    {
                    required: true,
                    },
                   ]}
                 >
               <DatePicker style={{ width: '50%' }} />

              </Form.Item>
      <Form.Item
        name="gender"
        label="Genre"
        rules={[{ required: true, message: 'Veuillez sélectionner le sexe !' }]}
      >
        <Select placeholder="sélectionnez votre sexe">
          <Option value="male">Mâle</Option>
          <Option value="femelle">Femelle</Option>
          <Option value="autre">Autre</Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="Nompere"
        label="Nom du père"
        rules={[{ required: true, message: 'Veuillez saisir le Nom de votre père!', whitespace: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="NomGrandPere"
        label="Nom du grand père"
        rules={[{ required: true, message: 'Veuillez saisir le Nom de votre  grand père!', whitespace: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="NomMere"
        label="Nom de la mère"
        rules={[{ required: true, message: 'Veuillez saisir le Nom de votre mère!', whitespace: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="PrenomMere"
        label="Prénom de la mére"
        rules={[{ required: true, message: 'Veuillez saisir le Prénom de votre mére!', whitespace: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="Gouvernorat"
        label="Gouvernorat en raison du lieu de naissance:"
        rules={[{ required: true, message: 'Veuillez sélectionner le Gouvernorat!' }]}
      >
        <Select placeholder="sélectionnez votre Gouvernorat">
          <Option value="Ariana">Ariana</Option>
          <Option value="Béja">Béja</Option>
          <Option value="Ben Arous">Ben Arous</Option>
          <Option value="Bizerte">Bizerte</Option>
          <Option value="Gabès">Gabès</Option>
          <Option value="Gafsa">Gafsa</Option>
          <Option value="Jendouba">Jendouba</Option>
          <Option value="Kairouan">Kairouan</Option>
          <Option value="Kasserine">Kasserine</Option>
          <Option value="Kébili">Kébili</Option>
          <Option value="Kef">Kef</Option>
          <Option value="Mahdia">Mahdia</Option>
          <Option value="Manouba">Manouba</Option>
          <Option value="Médenine">Médenine</Option>
          <Option value="Monastir">Monastir</Option>
          <Option value="Nabeul">Nabeul</Option>
          <Option value="Sfax">Sfax</Option>
          <Option value="Sidi Bouzid">Sidi Bouzid</Option>
          <Option value="Siliana">Siliana</Option>
          <Option value="Sousse">Sousse</Option>
          <Option value="Tataouine">Tataouine</Option>
          <Option value="Tozeur">Tozeur</Option>
          <Option value="Tunis">Tunis</Option>
          <Option value="Zaghouan">Zaghouan</Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="délégation"
        label="Délégation en raison du lieu de naissance:"
        rules={[{ required: true, message: 'Veuillez sélectionner le Délégation!' }]}
        
      >
        {/*<Select placeholder="sélectionnez votre Délégation">
          <Option value=""></Option>
          
                  </Select>*/}
      

      </Form.Item>
      <Form.Item
        name="Municipalité"
        label="Municipalité en raison du lieu de naissance:"
        rules={[{ required: true, message: 'Veuillez sélectionner le Délégation!' }]}
      >
        <Select placeholder="sélectionnez votre Municipalité">
          <Option value=""></Option>
          
        </Select>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Space>
          <Button type="primary" htmlType="submit">
          Confirmer
          </Button>
          <Button htmlType="button" >
          Annuler
          </Button>
        </Space>
      </Form.Item>
     
    
    </Form>

 
    </Col>
    </Row>
    </div>

    </div>
    )
}
export default AppInfoGenerales_Etape1  ;