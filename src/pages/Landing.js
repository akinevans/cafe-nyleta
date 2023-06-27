import React from "react";
import Hero from "../components/Hero/Hero";
import Carousel from "../components/Carousel/Carousel";
import ServicesComp from "../components/ServicesComp/ServicesComp";
import Quote from "../components/Quote/Quote";
import Factories from "../components/Factories/Factories";

//image imports
import landing_img from "../../src/assets/images/home/feature.jpg";

export default function Landing(props) {
  const data = [
    {
      landingHeroText:
        "Cafe Nyleta is a Los Angeles-based fashion consultancy with a team of expert designers providing end-to-end support. We specialize in producing high-quality garments, sourcing premium materials, and developing product lines that capture your brands vision.",
    },
    {
      landingQuoteText:
        "“Design is creativity, expertise, and collaboration. It involves attention to detail and a commitment to bringing ideas to life in a way that reflects the brand's vision and values”",
      landingAuthor: "Jack Mahaley, Lead Designer",
    },
  ];
  return (
    <>
      {/* Navbar and Footer are rendered in index.js */}
      <Hero message={data[0].landingHeroText} image={landing_img} />
      <Carousel page='landing1' />
      <ServicesComp />
      <Quote
        //
        quoteText={data[1].landingQuoteText}
        author={data[1].landingAuthor}
      />
      <Carousel page='landing2' />
      <Factories />
      {/* Router can render nav / footer conditionally on each page */}
    </>
  );
}
