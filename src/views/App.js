/*
 * @Author: your name
 * @Date: 2020-06-23 14:59:48
 * @LastEditTime: 2020-07-03 12:55:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \CITZ-IMB-Capstone2020 - xordpe-dev\src\views\App.js
 */ 
import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import Navbar from './Navbar.js';
import FetchLatestNews from './FetchLatestNews.js';
import PwaButton from './PwaButton.js'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  
  return (
    <div>
      <Header />
      <Navbar />
      <FetchLatestNews />
      <PwaButton />
      <br/><br/>
      <Footer />
     
    </div>
  );
}

export default App;
