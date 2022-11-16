import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './Store'
import { Provider } from 'react-redux'
import Routs from './Routes/Routs';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Routs />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
