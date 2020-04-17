import React from 'react';
import logo from './logo.svg';
import './App.css';

import TopNavBar from "./component/navbar";
import 'bootstrap/dist/css/bootstrap.min.css';

import FetchData from './component/pokemon';

function App() {
  return (
    <React.Fragment>
    <TopNavBar></TopNavBar>
    <div className="App">
      <header className="App-header">
        <FetchData></FetchData>
      </header>
    </div>
    </React.Fragment>
  );
}

export default App;
