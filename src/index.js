import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import './i18.js';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Suspense fallback="loading...">
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </Suspense>
);


