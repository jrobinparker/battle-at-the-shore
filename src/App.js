import React from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import Message from './components/Message';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <Message />
    </div>
  );
}

export default App;
