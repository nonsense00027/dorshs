import React from "react";
import logo from '../../img/rslogo.png';

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__left">
        <img src={logo} alt='logo' />
        <div className="text"> 
          <p>DAVAO ORIENTAL REGIONAL</p>
          <p>SCIENCE HIGH SHCOOL</p>
        </div>
        <div className="navbar__right">
          <p className='home'>Home</p>
          <p>About</p>
          <p>FAQ</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
