import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./ClientsSection.css";

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
          {/* img content is set in ClientSection.scss */}
          <img src='' alt='clients icons' className='client-logos-image' />
        </div>
        <Link to='./contact'>
          <Button
            //
            className='btn grey work'
            title='Work with us'
          />
        </Link>
      </div>
    </section>
  );
}
