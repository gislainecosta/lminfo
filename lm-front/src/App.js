import React from 'react';
import './App.css';
import Header from './components/Header/index'

import Router from './components/Router'

function App() {
  return (
    <div id='app'>
      <Header />
      <section id='body'>
        <Router />
      </section>
    </div>
  );
}

export default App;
