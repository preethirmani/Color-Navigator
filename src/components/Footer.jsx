import React from "react";
import { Link } from "react-router-dom";
import '../index.css';

const Footer = () => {
  return (
    <div id="footer">
    
      <Link to='/blue'>Blue</Link>
      <Link to='/green'>Green</Link>
      <Link to='/red'>Red</Link>
      <Link to='/yellow'>Yellow</Link>
      <Link to='/'>Home</Link>
    </div>
  )
}

export default Footer;