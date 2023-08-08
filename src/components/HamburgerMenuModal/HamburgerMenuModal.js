import React from "react";
import { Link } from "react-router-dom";
import "./HamburgerMenuModal.css";

export default function HamburgerMenuModal(props) {
  return (
    <div className={`burger-menu-outer-wrapper ${props.className}`}>
      <Link
        //
        to='/about'
        className='burger-menu-link'
        onClick={props.onClick}
      >
        About
      </Link>
      <Link
        //
        to='/shop'
        className='burger-menu-link'
        onClick={props.onClick}
      >
        Shop
      </Link>

      <Link
        //
        to='/contact'
        className='burger-menu-link'
        onClick={props.onClick}
      >
        Contact
      </Link>
    </div>
  );
}
