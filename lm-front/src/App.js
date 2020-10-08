import React, { useReducer, useEffect } from "react";
import './App.css';

import { CardReducer, initialState, } from "./functions/CardReducer";
import CardContext from './functions/CardContext';
import { pegaRestaurantes } from './functions/integracao'
import { pegaEndereço } from './functions/integracao'

import Router from './components/Router/Router'

function App() {
  return (
    <div id='app'>
      <Router />
    </div>
  );
}

export default App;
