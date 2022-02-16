import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import './App.css';


import AppLayout from '../AppLayout/AppLayout';
import Home from '../Home/Home';
import DeckEditor from '../DeckEditor/DeckEditor';
import CardDataBase from '../CardDataBase/CardDataBase';    

function App() {
  return (
    <div className="app">
        <Router>
            <Routes>
                <Route path="/" element={<AppLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/DeckEditor" element={<DeckEditor />} />
                    <Route path="/CardDataBase" element={<CardDataBase />} />
                </Route>
                <Route path="*" element={<h1>Page not found!</h1>} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
