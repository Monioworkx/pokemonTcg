import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import AppLayout from '../AppLayout/AppLayout';
import Home from '../Home/Home';
import DeckEditor from '../DeckEditor/DeckEditor';
import CardDataBase from '../CardDataBase/CardDataBase';    
import DeckEditorMain from '../DeckEditorMain/DeckEditorMain';
import DeckEditorCreateNewDeck from '../DeckEditorCreateNewDeck/DeckEditorCreateNewDeck';

const AppRouter = () => (
    <Router>
        <Routes>
            <Route path="/" element={<AppLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/DeckEditor" element={<DeckEditor />}>
                    <Route index="main-deck"  element={<DeckEditorMain />} />
                    <Route path="create-deck" element={<DeckEditorCreateNewDeck />} />
                </Route>
                <Route path="/CardDataBase" element={<CardDataBase />} />
            </Route>
            <Route path="*" element={<h1>Page not found!</h1>} />
        </Routes>
    </Router>
);

export default AppRouter;