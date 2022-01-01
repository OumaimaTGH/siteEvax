import React from 'react';

import AppContact from '../Components/contact/contact';
import AppFormulaireContact from '../Components/contact/FormulaireContact';

function AppHome() {
  return (
    <div className="main">
      <AppContact/>
      <AppFormulaireContact/>

    </div>
  );
}

export default AppHome;