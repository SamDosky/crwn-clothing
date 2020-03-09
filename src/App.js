import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import {Router} from 'react-router-dom'

function App() {
  return (
    <div >
      <Router exact path='/' component={HomePage}/>

    </div>
  );
}

export default App;
