import React from "react";
import "./ServicesComp.css";
import ServiceItem from "../ServiceItem/ServiceItem";

export default function ServicesComp() {
  return (
    <div className='services-outer-wrapper'>
      <div className='services-inner-wrapper'>
        <h1 className='component-title'>Our Services</h1>
        <ServiceItem
          title='01. Design'
          message='We specialize in designing performance garments, sportswear, leather goods, and soft goods. Our comprehensive design services include consultation, concept development, sketching, material selection, pattern making, sample creation, iteration, refinement, and tech pack creation.'
        />
      </div>
    </div>
  );
}
