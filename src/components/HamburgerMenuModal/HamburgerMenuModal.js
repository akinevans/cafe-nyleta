import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getCartQuantityAndPrice } from "../../utils/shopping";
import "./HamburgerMenuModal.css";

export default function HamburgerMenuModal(props) {
  const products = useSelector((state) => state.cart.products);
  return (
    <div className={`burger-menu-outer-wrapper ${props.className}`}>
      <Link
        //
        to='/'
        className='burger-menu-link'
        onClick={props.onClick}
      >
        Home
      </Link>
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

      <h1 className='burger-menu-link' onClick={props.cartOnClick}>
        {`Cart (${getCartQuantityAndPrice(products)[0]})`}
      </h1>
    </div>
  );
}
