import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./Navbar.css";
import logo from "../../assets/icons/cafe-nyleta-logo.png";
import WaitlistModal from "../WaitlistModal/WaitlistModal";
import HamburgerMenuModal from "../HamburgerMenuModal/HamburgerMenuModal";
import hamburger from "../../assets/icons/hamburger-menu.svg";
import exit from "../../assets/icons/exit.svg";

//TODO: There is no way to navigate to the Cart while in tablet / mobile view. Look at Figma to see if Kevin made any changes

export default function Navbar(props) {
  const [cartVisible, setCartVisible] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  // lock navbar in place, this fix solves the scrolling issue when HamburgerModal is visible
  const [lockNav, setLockNav] = useState(false);
  // true == hamburger icon, false == X icon
  const [menuIcon, setMenuIcon] = useState(true);

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
            alt='cafe nyleta logo'
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
          {/* //TODO: Build a shopping cart component separate from waitlist that will store all items in cart */}
          <button
            className='cart-btn'
            onClick={() => {
              setCartVisible(!cartVisible);
            }}
          >
            {`Cart (${props.quantity})`}
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
          >
            <img
              src={menuIcon ? hamburger : exit}
              alt=''
              className='hamburger-img'
            />
          </button>
        </div>
      </div>
      {/* //& Waitlist Modal */}
      <WaitlistModal
        className={cartVisible ? "gray-out" : "hidden"}
        header='My Cart'
        quantity={`(${0})`}
        name='Work Shirt - White'
        size='L'
        price='375'
        //^btnOnClick is a custom prop
        btnOnClick={() => {
          setCartVisible(!cartVisible);
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
      />
    </nav>
  );
}
