import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Carousel from "../components/Carousel/Carousel";
import Quote from "../components/Quote/Quote";

export default function Landing(props) {
  return (
    <>
      <Navbar />
      <Hero />
      <Carousel page='landing1' />
      {/* Services */}
      <Quote
        quoteText="“Design is creativity, expertise, and collaboration. It involves attention to detail and a commitment to bringing ideas to life in a way that reflects the brand's vision and values”"
        author='Jack Mahaley, Lead Designer'
      />
      <Carousel page='landing2' />

      {/* World Map */}
      {/* Footer */}
      {/* Router can render nav / footer conditionally on each page */}
    </>
  );
}
