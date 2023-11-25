import React from 'react';
import {  Link } from "react-router-dom";
import '../App.css';
const navbar= () =>{
  return (
  <div className='navbar'>
    <div className='navbar-items'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
    </div>
  </div>
  );
}
export default navbar;