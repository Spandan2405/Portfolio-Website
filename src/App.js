import React from 'react';
import './App.css';
import Navbar from './components/Header/Navbar';
import About from './components/AboutMe/Abt';
import Skills from './components/Skills/skills';
import Workex from './components/WorkEx/Workex';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contactme';

function App() {
  return (
    <div className="App">
    <Navbar />
    <About />
    <Skills />
    <Workex />
    <Projects />
    <Contact />
    </div>
  );
}

export default App;
