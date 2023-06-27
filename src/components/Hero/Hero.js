import React from "react";
import "./Hero.css";

export default function Hero(props) {
  return (
    <section className='hero-outer-wrapper'>
      <div className='hero-inner-wrapper'>
        <div className='hero-text-wrapper'>
          <p>{props.message}</p>
        </div>
      </div>
    </section>
  );
}
