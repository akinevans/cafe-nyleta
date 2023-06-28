import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "../../assets/icons/cafe-nyleta-logo.png";

export default function Footer() {
  return (
    <footer className='footer-outer-wrapper'>
      <div className='footer-content-wrapper'>
        <img src={logo} alt='' />
        {/* Replace with router Link elements */}
        <Link to='/privacy-policy'>Privacy Policy</Link>
        <Link to='/terms-and-conditions'>Terms & Conditions</Link>
        <Link to='/careers'>Careers</Link>
        <Link to='/contact'>Contact us</Link>
      </div>
    </footer>
  );
}
