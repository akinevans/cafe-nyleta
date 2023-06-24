import React from "react";
import "./Factories.css";
import world_map from "../../assets/images/home/worldmap.png";

export default function Factories() {
  //! Build Modal that triggers when hovering over arrow on map
  return (
    <section className='factories-outer-wrapper'>
      <div className='factories-inner-wrapper'>
        <div className='factories-text-wrapper'>
          <h1>Factories & vendors</h1>
          <p>
            Our network is built on a roster of reliable, time-tested factories
            and vendors that have been carefully curated and assessed to ensure
            that all products developed meet industry standards and are produced
            using sustainable and best practices.
          </p>
        </div>
        <div className='factories-img-wrapper'>
          <img src={world_map} alt='world map' />
          {/* Add framer spring-jump animations */}
          <div className='triangle america'></div>
          <div className='triangle turkey'></div>
          <div className='triangle china'></div>
          <div className='triangle vietnam'></div>
        </div>
      </div>
    </section>
  );
}
