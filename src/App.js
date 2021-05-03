import React from 'react';
import './App.css';
import Provider from './context/Provider';
import Planets from './pages/Planets';

function App() {
  return (
    <Provider>
      <img src="./logo.png"/>
      <Planets />
    </Provider>
  );
}

export default App;