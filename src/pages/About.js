import React from "react";
import FeatureImage from "../components/FeatureImage/FeatureImage";
import TextSection from "../components/TextSection/TextSection";
import Quote from "../components/Quote/Quote";
import Carousel from "../components/Carousel/Carousel";
import Collaborations from "../components/Collaborations/Collaborations";

// Image Imports
import cafe from "../assets/images/about/01_head_banner.webp";
import cup from "../assets/images/about/02_cup.webp";
import joss_sticks from "../assets/images/about/03_joss_sticks.webp";

export default function About() {
  const aboutPageData = {
    cafeImage: cafe,
    cupImage: cup,
    jossImage: joss_sticks,

    cafeAlt: "man sitting in a cafe",
    cupAlt: "coffee cup filled with coffee",
    jossAlt: "joss incense",

    aboutQuoteText:
      "“Coffee and Cafes are a celebration of life's simple pleasures, a sensory experience that combines aroma, taste and ambiance to create a unique and indulgent moment.”",

    aboutAuthor: "Jack Mahaley, Lead Designer",
  };
  return (
    <>
      <FeatureImage
        image={aboutPageData.cafeImage}
        alt={aboutPageData.cafeAlt}
      />
      <TextSection />
      <FeatureImage
        //
        className='negativeBottomMargin'
        image={aboutPageData.cupImage}
        alt={aboutPageData.cupAlt}
      />
      <Quote
        quoteText={aboutPageData.aboutQuoteText}
        author={aboutPageData.aboutAuthor}
      />
      <Carousel page='about' />
      {/* New Collaborators component here */}
      {/* ADD MARGIN to bottom of Collaborators component */}
      <Collaborations />
      <FeatureImage
        className='zeroBottomMargin'
        image={aboutPageData.jossImage}
        alt={aboutPageData.jossAlt}
      />
    </>
  );
}
