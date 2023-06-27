import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";
import ClientsSection from "../ClientsSection/ClientsSection";
import Button from "../Button/Button";

export default function Hero(props) {
  return (
    <section className='hero-outer-wrapper'>
      <div className='hero-inner-wrapper'>
        <div className='hero-text-wrapper'>
          <p>{props.message}</p>
        </div>

        <img
          className='hero-img'
          src={props.image}
          alt='clothing model standing in the woods'
        />

        <ClientsSection />
        {/* Note, button is not inside the ClientsSection component, this should clear up any confusion with positioning and margins */}
        <Link to='./contact'>
          <Button className='btn grey work' title='Work with us' />
        </Link>
      </div>
    </section>
  );
}
