import React from "react";
import Button from "../Button/Button";
import "./Navbar.css";
import logo from "../../assets/icons/cafe-nyleta-logo.png";

export default function Navbar() {
  return (
    //& Replace anchor tags with Link elements after setting up Router
    <nav className='nav-outer-wrapper'>
      <div className='nav-inner-wrapper'>
        <img src={logo} alt='cafe nyleta logo' className='nav-logo' />
        <div className='nav-links-wrapper'>
          <a href='/'>About</a>
          <a href='/'>Shop</a>
          <Button className='btn grey contact' title='Contact Us' />
        </div>
      </div>
    </nav>
  );
}
