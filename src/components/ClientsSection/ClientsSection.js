import React from "react";
import "./ClientsSection.css";
import stussy from "../../assets/images/home/client-logos/01_Stussy.png";
import arcteryx from "../../assets/images/home/client-logos/02_arcteryx.png";
import carhartt from "../../assets/images/home/client-logos/03_carhartt.png";
import nike from "../../assets/images/home/client-logos/04_acg_nike.png";
import snowpeak from "../../assets/images/home/client-logos/05_snowpeak.png";
import goretex from "../../assets/images/home/client-logos/06_goretex.png";
import adidas from "../../assets/images/home/client-logos/07_adidas.png";
import wtaps from "../../assets/images/home/client-logos/08_wtaps.webp";

export default function ClientsSection() {
  return (
    <section className='clients-outer-wrapper'>
      <div className='clients-inner-wrapper'>
        <div className='clients-text-wrapper'>
          <h1>Our Clients</h1>
          <p>
            Drawing on our extensive industry experience, we offer specialized
            support for a wide range of projects that demand apparel,
            manufacturing, or branding expertise. Our clients span a broad
            spectrum, from technical gear companies to established brands.
          </p>
        </div>
        <div className='clients-img-wrapper'>
          <div className='img-top'>
            <img src={stussy} alt='stussy logo' className='stussy' />
            <img src={arcteryx} alt='arcteryx logo' className='arcteryx' />
            <img src={carhartt} alt='carhartt logo' className='carhartt' />
            <img src={nike} alt='nike logo' className='nike' />
          </div>
          <div className='img-bottom'>
            <img src={snowpeak} alt='snowpeak logo' className='snowpeak' />
            <img src={goretex} alt='goretex logo' className='goretex' />
            <img src={adidas} alt='adidas logo' className='adidas' />
            <img src={wtaps} alt='wtaps logo' className='wtaps' />
          </div>
        </div>
      </div>
    </section>
  );
}
