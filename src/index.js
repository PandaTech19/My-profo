import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import "./Styles/App.css"
import Loading from './Mycontent/LoadingScreen/loading';
import './i18.js';
import DelayedApp from "./delayed.js";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Suspense fallback={<Loading/>}>
    <Router>
      <React.StrictMode>
        <DelayedApp />
      </React.StrictMode>
    </Router>
  </Suspense>
);