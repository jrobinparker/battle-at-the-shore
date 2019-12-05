import React from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import Message from './components/Message';
import About from './components/About';
import Register from './components/Register';
import Contact from './components/Contact';

import './App.css';

function App() {

  return (
    <div className="App">
      <Nav />
      <div className="content">
        <Home />
        <Message />
        <About />
        <Register />
        <Contact />
      </div>
    </div>
  );
}

export default App;
