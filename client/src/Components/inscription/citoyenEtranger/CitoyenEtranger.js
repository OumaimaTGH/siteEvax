/*import React from "react";
import { Steps, Button, message } from 'antd';
import AppCitoyenEtranger_Etape1 from "./citoyenEtranger_Etape1";
import  AppVerifNumTel_Etape2 from "../citoyenCIN/verifNumTe_Etape2";
import  AppQuestionnaire_Etape3 from "../citoyenCIN/questionnaire_Etape3";
const { Step } = Steps;

const steps = [
  {
    title: 'First',
    content: <AppCitoyenEtranger_Etape1/>,
  },
  {
    title: 'Second',
    content: AppVerifNumTel_Etape2,
  },
  {
    title: 'Last',
    content: <AppQuestionnaire_Etape3/>,
  },
];


export default function AppCitoyenCIN ()  {
  const [current, setCurrent] = React.useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };
  
  return (
    <>
      <Steps current={current}>
        {steps.map(item => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="steps-content">{steps[current].content}</div>
      <div className="steps-action">
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={() => message.success('Processing complete!')}>
            Done
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div>
    </>
  );
};

*/