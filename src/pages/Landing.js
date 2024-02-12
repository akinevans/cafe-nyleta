import React from "react";

// component imports
import Hero from "../components/Hero/Hero";
import FeatureImage from "../components/FeatureImage/FeatureImage";
import ClientsSection from "../components/ClientsSection/ClientsSection";
import Carousel from "../components/Carousel/Carousel";
import ServicesComp from "../components/ServicesComp/ServicesComp";
import Quote from "../components/Quote/Quote";
import Factories from "../components/Factories/Factories";

//image imports
import landing_img from "../../src/assets/images/home/feature.webp";

// utility imports
import { landingPageData } from "../utils/textData";
landingPageData.image = landing_img;

export default function Landing() {
  return (
    <>
      {/* Navbar and Footer are rendered in index.js */}
      <Hero
        //
        message={landingPageData.message}
        alt={landingPageData.alt}
      />
      <FeatureImage
        image={landingPageData.image}
        alt={landingPageData.alt}
        width='1000'
        height='667'
      />
      <ClientsSection />
      <Carousel page='landing1' />
      <ServicesComp />
      <Quote
        //
        quoteText={landingPageData.landingQuoteText}
        author={landingPageData.landingAuthor}
      />
      <Carousel page='landing2' />
      <Factories />
    </>
  );
}
