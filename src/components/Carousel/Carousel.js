import React from "react";
import "./Carousel.css";
import c1 from "../../assets/images/home/carousel-1/carousel_101.webp";
import c2 from "../../assets/images/home/carousel-1/carousel_102.webp";
import c3 from "../../assets/images/home/carousel-1/carousel_103.jpg";
import c4 from "../../assets/images/home/carousel-1/carousel_104.jpg";
import c5 from "../../assets/images/home/carousel-1/carousel_105.jpg";
import c6 from "../../assets/images/home/carousel-1/carousel_106.jpg";
import c7 from "../../assets/images/home/carousel-1/carousel_107.jpg";
import c8 from "../../assets/images/home/carousel-1/carousel_108.jpg";

//! Images should scroll on X axis with both scroll wheels

export default function Carousel(props) {
  const landingData1 = [c1, c2, c3, c4, c5, c6, c7, c8];
  //   variable for each carousels list of images
  //   variable for each carousels list of images
  //   variable for each carousels list of images

  function getImages(data) {
    for (let i = 0; i < data.length; i++) {
      document.write(`${i}: image </br> `);
    }
  }
  return (
    <div className={`carousel-outer-wrapper ${props.className}`}>
      <div className={`carousel-inner-wrapper ${props.className}`}>
        {/* add utility classes for each carousel size */}
        {/* write a function to get image data instead of hard coding it */}
        {/* {getImages(landingData1)} */}
        <img className={props.className} src={landingData1[0]} alt='' />
        <img className={props.className} src={landingData1[1]} alt='' />
        <img className={props.className} src={landingData1[2]} alt='' />
        <img className={props.className} src={landingData1[3]} alt='' />
        <img className={props.className} src={landingData1[4]} alt='' />
        <img className={props.className} src={landingData1[5]} alt='' />
        <img className={props.className} src={landingData1[6]} alt='' />
        <img className={props.className} src={landingData1[7]} alt='' />
      </div>
    </div>
  );
}
