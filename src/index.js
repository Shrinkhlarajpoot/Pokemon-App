import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ListProvider } from './context/pokemonlistContext';
import { BrowserRouter as Router } from 'react-router-dom';
import { GoogleAuthProvider } from './context/authContext';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
   
   <GoogleAuthProvider>
      <ListProvider>
        <App />
      </ListProvider>
    </GoogleAuthProvider>
   
   
  </Router>
);