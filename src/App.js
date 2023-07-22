import React from 'react';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Skills from './components/skills/Skills';
import Service from './components/service/Service';
import './App.css';

const App = () => {
  return (
    <>
      <Header/>        
      <main className="main">
        <Home/>
        <Skills/>
        <Service/>
      </main>      
    </>    
  )
}

export default App