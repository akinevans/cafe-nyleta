import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import "./HamburgerMenuModal.css";

export default function HamburgerMenuModal(props) {
  const products = useSelector((state) => state.cart.products);

  //! export to module
  const getCartQuantityAndPrice = () => {
    let totalQuantity = 0;
    let totalPrice = 0;

    for (let i = 0; i < products.length; i++) {
      totalQuantity += products[i].itemQuantity;
    }
    return [totalQuantity, totalPrice];
  };

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

      <h1 className='burger-menu-link' onClick={props.cartOnClick}>
        {`Cart (${getCartQuantityAndPrice()[0]})`}
      </h1>
    </div>
  );
}
