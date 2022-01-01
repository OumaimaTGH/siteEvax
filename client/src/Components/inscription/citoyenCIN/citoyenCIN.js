import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import '../maj_inscription/maj_inscription.css';
import { Steps, Button, message } from 'antd';
import PersonalDetails from '../maj_inscription/personal-details';
import VerifNumTe_Etape2 from './verifNumTe_Etape2';
import AppCitoyenTitulaire_Etape1 from './citoyenTitulaire_Etape1';
import AppQuestionnaire_Etape3 from './questionnaire_Etape3';
const { Step } = Steps;

const steps = [
  {
    title: 'Détails personnels',
    content: <AppQuestionnaire_Etape3/>,
  },
];

export default function AppCitoyenCin() {
  const [current, setCurrent] = React.useState(0);


  return (
    <div className="form_maj">

      <h2 id="maj">Inscription citoyen Titulaire</h2>
      <Steps current={current}>
        {steps.map(item => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="steps-content">{steps[current].content}</div>
    </div>
  );
};
