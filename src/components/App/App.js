import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import './App.css';

import Main from '../Main/Main'
import Home from '../Home/Home';
import AppLayout from '../AppLayout/AppLayout';
import CardDataBase from '../CardDataBase/CardDataBase';    

function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<AppLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/CardDataBase" element={<CardDataBase />} />
            </Route>
            <Route path="*" element={<h1>Page not found!</h1>} />
        </Routes>
    </Router>
  );
}

export default App;