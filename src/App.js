import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import './styles/App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Navbar />
      <About />
      <Skills />
      <Experience />
      <Services />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;