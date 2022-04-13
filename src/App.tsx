import './App.css';
import './assets/css/Main.css'
import React from 'react';
import { GridFooter } from './layout/girdfooter/GridFooter';
import { GridHeader } from './layout/gridheader/GridHeader';
import { GridBody } from './layout/gridbody/GridBody';

function App() {
  return (
    <div className="App">





      <GridHeader css='headerTest'
      headerName='헤더부1분'
      />

      <GridBody
      css='mainTest'
      dataType='body'
      />

      





      <GridFooter css={"test"}      
      page = {1}            
      ></GridFooter>
    </div>
  );
}

export default App;
