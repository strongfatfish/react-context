import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AppProvider } from "./store";
import "bootstrap/dist/css/bootstrap.css"

ReactDOM.render(
  <React.StrictMode>
      <AppProvider>
          <App />
      </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
