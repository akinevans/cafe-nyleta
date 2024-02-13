import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

//component imports
import Button from "../Button/Button";
import ShoppingCartModal from "../Modals/ShoppingCartModal/ShoppingCartModal";
import HamburgerMenuModal from "../Modals/HamburgerMenuModal/HamburgerMenuModal";

// utility imports
import { getCartQuantityAndPrice } from "../../utils/shoppingLogic";

// asset imports
import exit from "../../assets/icons/exit.svg";
import logo from "../../assets/icons/cafe-nyleta-logo.png";
import hamburger from "../../assets/icons/hamburger-menu.svg";
import "./Navbar.css";

export default function Navbar() {
  const [cartVisible, setCartVisible] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  // lock navbar in place, this fix solves the scrolling issue when HamburgerModal is visible
  const [lockNav, setLockNav] = useState(false);
  // true == hamburger icon, false == X icon
  const [menuIcon, setMenuIcon] = useState(true);
  const products = useSelector((state) => state.cart.products);
  // console.log(products);

  //Window width for showing / hiding hamburger menu
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <nav className={`nav-outer-wrapper ${lockNav ? "lock" : ""}`}>
      <div className='nav-inner-wrapper'>
        <Link to='/'>
          <img
            src={logo}
            alt='cafe nyleta logo navbar'
            className='nav-logo'
            onClick={() => {
              // Reset menu icon and hide modal (tablet / mobile view) when cafe-nyleta logo is clicked
              setMenuIcon(true);
              setMenuVisible(false);
              setLockNav(false);
            }}
          />
        </Link>
        <div className='nav-links-wrapper'>
          <Link to='/about'>About</Link>
          <Link to='/shop'>Shop</Link>

          <button
            className='cart-btn'
            onClick={() => {
              setCartVisible(!cartVisible);
            }}
          >
            {/* //get the total quantity only  */}
            {`Cart (${getCartQuantityAndPrice(products)[0]})`}
          </button>
          <Link to='/contact'>
            <Button className='btn grey contact' title='Contact Us' />
          </Link>

          {/* //&  Hamburger menu */}
          <button
            className={`hamburger-menu ${windowSize[0] <= 834 ? "" : "hide"}`}
            onClick={() => {
              setMenuVisible(!menuVisible);
              setMenuIcon(!menuIcon);
              setLockNav(!lockNav);
            }}
            value=''
          >
            <img
              src={menuIcon ? hamburger : exit}
              alt={menuIcon ? "hamburger menu icon" : "exit icon"}
              className='hamburger-img'
            />
          </button>
        </div>
      </div>

      {/* //& Shopping Cart modal */}
      <ShoppingCartModal
        className={
          cartVisible ? (windowSize[0] <= 834 ? "" : "gray-out") : "hidden"
        }
        headerQuantity={products.length ? products.length : "0"}
        closeBtnOnClick={() => {
          setCartVisible(!cartVisible);
        }}
        checkoutBtnOnClick={() => {
          //navigate to checkout page
          // alert("checkout btn pressed");
        }}
      />

      {/* //& Hamburger modal */}
      <HamburgerMenuModal
        //windowSize[0] is width [1] is height
        className={`${menuVisible && windowSize[0] <= 834 ? "" : "hide"}`}
        onClick={() => {
          setMenuVisible(!menuVisible);
          setMenuIcon(!menuIcon);
          setLockNav(!lockNav);
        }}
        cartOnClick={() => {
          setMenuIcon(!menuIcon);
          setMenuVisible(false);
          setCartVisible(true);
        }}
      />
    </nav>
  );
}
