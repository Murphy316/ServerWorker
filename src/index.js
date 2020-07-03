/*
 * @Author: your name
 * @Date: 2020-07-02 23:52:44
 * @LastEditTime: 2020-07-02 23:58:42
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \CITZ-IMB-Capstone2020\src\index.js
 */ 
import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './views/App.js';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
