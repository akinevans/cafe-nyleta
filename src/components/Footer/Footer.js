import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "../../assets/icons/cafe-nyleta-logo.png";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <footer className='footer-outer-wrapper'>
      <div className='footer-content-wrapper'>
        <Link
          //
          to='/'
          onClick={() => {
            scrollToTop();
          }}
        >
          <img src={logo} alt='cafe nyleta logo footer' />
        </Link>
        <Link to='/privacy-policy'>Privacy Policy</Link>
        <Link to='/terms-and-conditions'>Terms & Conditions</Link>
        {/* <Link to='/careers'>Careers</Link> */}
        <Link to='/contact'>Contact Us</Link>
      </div>
    </footer>
  );
}
