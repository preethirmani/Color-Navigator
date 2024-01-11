import React from "react";
import {Routes, Route} from 'react-router-dom';
import Home from "./Home";
import Blue from "./Blue";
import Red from "./Red";
import Yellow from "./Yellow";
import Green from "./Green";
import '../index.css';

const RouterComponent = () => {
 return(
  
  <div id='main-section'>
    <Routes >
      <Route path="/" element={<Home />}></Route>
      <Route path="/blue" element={<Blue />}></Route>
      <Route path="/green" element={<Green />}></Route>
      <Route path="/red" element={<Red />}></Route>
      <Route path="/yellow" element={<Yellow />}></Route>
    </Routes>
  </div>
  
 )

}

export default RouterComponent;