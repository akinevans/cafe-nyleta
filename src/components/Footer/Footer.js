import React from "react";
import "./Footer.css";
import logo from "../../assets/icons/cafe-nyleta-logo.png";

export default function Footer() {
  return (
    <footer className='footer-outer-wrapper'>
      <div className='footer-content-wrapper'>
        <img src={logo} alt='' />
        {/* Replace with router Link elements */}
        <a href='/'>Privacy Policy</a>
        <a href='/'>Terms & Conditions</a>
        <a href='/'>Careers</a>
        <a href='/'>Contact us</a>
      </div>
    </footer>
  );
}
