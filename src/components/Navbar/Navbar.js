import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./Navbar.css";
import logo from "../../assets/icons/cafe-nyleta-logo.png";

export default function Navbar() {
  return (
    <nav className='nav-outer-wrapper'>
      <div className='nav-inner-wrapper'>
        <Link to='/'>
          <img src={logo} alt='cafe nyleta logo' className='nav-logo' />
        </Link>
        <div className='nav-links-wrapper'>
          <Link to='/about'>About</Link>
          <Link to='/shop'>Shop</Link>
          <Link to='/contact'>
            <Button className='btn grey contact' title='Contact Us' />
          </Link>
        </div>
      </div>
    </nav>
  );
}
