import React from "react";
import "./Hero.css";
import ClientsSection from "../ClientsSection/ClientsSection";
import Button from "../Button/Button";
import hero_img from "../../assets/images/home/feature.jpg";

export default function Hero() {
  return (
    <section className='hero-outer-wrapper'>
      <div className='hero-inner-wrapper'>
        <div className='hero-text-wrapper'>
          <p>
            Cafe Nyleta is a Los Angeles-based fashion consultancy with a team
            of expert designers providing end-to-end support. We specialize in
            producing high-quality garments, sourcing premium materials, and
            developing product lines that capture your brand's vision.
          </p>
        </div>

        <img
          className='hero-img'
          src={hero_img}
          alt='clothing model standing in the woods'
        />

        <ClientsSection />
        {/* Note, button is not inside the ClientsSection component, this should clear up any confusion with positioning and margins */}
        <Button className='btn grey work' title='Work with us' />
      </div>
    </section>
  );
}
