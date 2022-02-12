import React from 'react';

import './App.css';

import Header from '../Header/Header';
import Main from '../Main/Main';
import SideBar from '../SideBar/SideBar';


function App() {
  return (
    <div className="App">
        <SideBar />
        <div className="page-content">
            <Header />
            <Main />
        </div>
    </div>
  );
}

export default App;
