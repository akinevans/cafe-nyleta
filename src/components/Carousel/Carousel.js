import React from "react";
import { motion } from "framer-motion";
import "./Carousel.css";

// component imports
import ImageComp from "../../components/ImageComp/ImageComp";

// utility imports
import {
  LandingPageCarouselOneData,
  LandingPageCarouselTwoData,
  AboutPageCarouselData,
} from "../../utils/carouselData";

//! Images should scroll on X axis with both scroll wheels

export default function Carousel(props) {
  function displayImages(page) {
    if (page === "landing1") {
      return LandingPageCarouselOneData.map((item) => (
        <ImageComp {...item} key={item.name} />
      ));
    } else if (page === "landing2") {
      return LandingPageCarouselTwoData.map((item) => (
        <ImageComp {...item} key={item.name} />
      ));
    } else if (page === "about") {
      return AboutPageCarouselData.map((item) => (
        <ImageComp {...item} key={item.name} />
      ));
    }
  }

  return (
    <div className='carousel-outer-wrapper'>
      <motion.div className='carousel-inner-wrapper'>
        {/* props.page value is coming from Landing component */}
        {displayImages(props.page)}
      </motion.div>
    </div>
  );
}
