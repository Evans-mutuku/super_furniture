import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { StateProvider } from './Utils/StateProvider';
import reducer,{ initialState } from './Utils/reducer';

ReactDOM.render(
  <React.StrictMode>

    <StateProvider initialState={initialState} reducer={reducer}>
     <BrowserRouter>
      <App />
    </BrowserRouter>
   </StateProvider>

  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
