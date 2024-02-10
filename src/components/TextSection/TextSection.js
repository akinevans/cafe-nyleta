import React from "react";
import "./TextSection.css";

export default function TextSection() {
  return (
    <div className='textsection-outer-wrapper'>
      <div className='textsection-inner-wrapper'>
        <p>
          <span className='bold'>Cafe Nyleta isn't a physical cafe.</span> It
          celebrates cafe culture through design accents, and immersive
          experiences. With a decade of experience in apparel design, Cafe
          Nyleta now helps others realize their brand visions.
          <span className='text-split'>
            Originally a testing ground for design concepts, it has expanded its
            vision to all aspects of garment-making to produce high-quality
            products. Cafe Nyleta shares its expertise to demystify garment
            manufacturing and support those breaking into the market.
          </span>
        </p>
      </div>
    </div>
  );
}
