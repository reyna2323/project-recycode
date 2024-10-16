import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Import your global styles
import App from './App'; // Import the main component
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
