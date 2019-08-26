import React from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import Message from './components/Message';
import About from './components/About';
import Register from './components/Register';

import './App.css';

function App() {

  return (
    <div className="App">
      <Nav />
      <Home />
      <Message />
      <About />
      <Register />
    </div>
  );
}

export default App;
