import React from "react";
import { Link } from "react-router-dom";
import Home from "./Home";
import Red from "./Red";
import Blue from "./Blue";
import Yellow from "./Yellow";
import '../index.css'

const Navbar = () => {
  return(
    <div id="navbar">
      <Link to='/blue'>Blue</Link> 
      <Link to='/green'>Green</Link>
      <Link to='/red'>Red</Link> 
      <Link to='/yellow'>Yellow</Link>
      <Link to='/'>Home</Link>
    </div>
  )
}

export default Navbar;