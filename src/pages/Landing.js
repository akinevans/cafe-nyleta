import React from "react";
import Hero from "../components/Hero/Hero";
import Carousel from "../components/Carousel/Carousel";
import ServicesComp from "../components/ServicesComp/ServicesComp";
import Quote from "../components/Quote/Quote";
import Factories from "../components/Factories/Factories";

export default function Landing(props) {
  const quoteData = {
    text: "“Design is creativity, expertise, and collaboration. It involves attention to detail and a commitment to bringing ideas to life in a way that reflects the brand's vision and values”",
    author: "Jack Mahaley, Lead Designer",
  };
  return (
    <>
      <Hero />
      <Carousel page='landing1' />
      <ServicesComp />
      <Quote
        //
        quoteText={quoteData.text}
        author={quoteData.author}
      />
      <Carousel page='landing2' />
      <Factories />
      {/* Router can render nav / footer conditionally on each page */}
    </>
  );
}
