import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./Navbar.css";
import logo from "../../assets/icons/cafe-nyleta-logo.png";
import WaitlistModal from "../WaitlistModal/WaitlistModal";
import hamburger from "../../assets/icons/hamburger-menu.svg";
import exit from "../../assets/icons/exit.svg";

export default function Navbar(props) {
  const [visible, setVisible] = useState(false);

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
    <nav className='nav-outer-wrapper'>
      {/* //^ colored react comment */}
      <div className='nav-inner-wrapper'>
        <Link to='/'>
          <img src={logo} alt='cafe nyleta logo' className='nav-logo' />
        </Link>
        <div className='nav-links-wrapper'>
          <Link to='/about'>About</Link>
          <Link to='/shop'>Shop</Link>
          <button
            className='cart-btn'
            onClick={() => {
              setVisible(!visible);
            }}
          >
            {`Cart (${props.quantity})`}
          </button>
          <Link to='/contact'>
            <Button className='btn grey contact' title='Contact Us' />
          </Link>
          {/*  hamburger menu */}
          <button
            className={`hamburger-menu ${windowSize[0] <= 834 ? "" : "hide"}`}
          >
            <img src={hamburger} alt='' className='hamburger-img' />
          </button>
        </div>
      </div>
      <WaitlistModal
        className={visible ? "gray-out" : "hidden"}
        header='My Cart'
        quantity={`(${0})`}
        name='Work Shirt - White'
        size='L'
        price='375'
        //^btnOnClick is a custom prop
        btnOnClick={() => {
          setVisible(!visible);
        }}
      />
    </nav>
  );
}
