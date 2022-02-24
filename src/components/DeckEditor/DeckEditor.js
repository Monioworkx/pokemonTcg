import React from "react";
import { BrowserRouter as Router, Route, Routes, Link, Outlet , context } from 'react-router-dom';

import './DeckEditor.css';
import useFirebase from '../../Hooks/useFirebase';

const DeckEditor = () => {
    const firebaseManager = useFirebase();
    return (
        <div className="section-container">
            <Outlet context={firebaseManager} />
        </div>
    );
}

export default DeckEditor;