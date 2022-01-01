
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './form-pharmacie.css';
import { Steps, Button, message } from 'antd';
import Informationspharmacie from './Informationspharmacie';
import Donneepharmacie from './Donneepharmacie';

const { Step } = Steps;

const steps = [
  {
    title: 'Informations sur la pharmacie',
    content: <Informationspharmacie/>,
  },
  {
    title: 'Détails personnels',
    content: <Donneepharmacie/>,
  },
 
];

const Pharmacie= () => {
  const [current, setCurrent] = React.useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };
  

  return (
   

    <div className="form_pharmacie">

      <h2 id="pharmacie" align="center" >Inscription Pharmacie  </h2>
      <Steps current={current}>
        {steps.map(item => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="steps-content">{steps[current].content}</div>
      <div className="steps-action">
        {current < steps.length - 1 && (
          <Button type="primary" className="ant-btn-tn" onClick={() => next()}>
            Suivant
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" className="ant-btn-tn" onClick={() => message.success('Processing complete!')}>
            Valider
          </Button>
        )}
        {current > 0 && (
          <Button className="ant-btn-tn" style={{ margin: '0 8px' }} onClick={() => prev()}>
            Précédent
          </Button>
        )}
      </div>
    </div>
  );
};


export default Pharmacie;

