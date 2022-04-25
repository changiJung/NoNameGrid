import './App.css';
import './assets/css/Main.css'
import React from 'react';
import { NonameGrid } from "./components/NoNameGrid"



function App() {


  

  return (
    <div className="App">
      <NonameGrid       
        bodyData={['test1', 'test3', 'test4']}
        bodyType={'body1'}
        bodyCss={'mainTest'}
        footerCss={'test'}
        headerCss={'headerTest'}
        headerName={['헤더11', '헤더22', '헤더33']}
        pageNumber={1}      
      />
    </div>
  );
}

export default App;
