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
        headerName={['헤더1', '헤더2', '헤더3']}
      />

      <GridBody
      css='mainTest'
      dataType='body'
      data = {['test', 'test1', 'test2']}
      />

      <GridFooter css={"test"}      
        page = {1}            
      ></GridFooter>
    </div>
  );
}

export default App;
