import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/colors.css';
import Routes from './pages/Routes';

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);