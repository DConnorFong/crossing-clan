import React from 'react';
import Navbar from './components/navbar/Navbar';
import './App.scss';
import 'bulma/css/bulma.min.css';
import './components/navbar/Navbar';

function App() {
    return (
        <div className="App">
            <Navbar isLoggedIn={false} account={{}} />
            <h1>Crossing Clan</h1>
        </div>
    );
}

export default App;
