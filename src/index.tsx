import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import Routing from './routingpage/Routing';

const root  = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
  <Routing></Routing>
  </>
);

reportWebVitals();
