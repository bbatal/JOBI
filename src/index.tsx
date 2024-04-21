import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// Global Stylesheet
import GlobalStyle from './globalStyles';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);

