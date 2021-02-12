import './App.scss';
import React from 'react'
import { Body } from '../src/components/body/body.jsx'
import { Header } from '../src/components/header/header.jsx'

function App() {
  return (
    <div className="App">
     <Header/>
     <Body/>
    </div>
  );
}

export default App;
