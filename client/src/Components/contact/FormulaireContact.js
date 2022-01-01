import React from "react";
import './Contact.css';

import { Form, Input,  Button } from 'antd';
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
/* eslint-disable no-template-curly-in-string */

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    // number: '${label} is not a valid !',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
/* eslint-enable no-template-curly-in-string */

const AppFormulaireContact = () => {
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <div className="con">
      
    </div>

  );
};
export default AppFormulaireContact;