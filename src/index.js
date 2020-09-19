import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import STORE from './store';
import App from './App';


// render App component using data from STORE
ReactDOM.render(
  <App store={STORE} />,
  document.getElementById('root'),
);
