import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Carousel from "../components/Carousel/Carousel";

export default function Landing(props) {
  return (
    <>
      <Navbar />
      <Hero />
      <Carousel page='landing1' />
      {/* Services */}
      <h3>carousel 2 images need to be cropped</h3>
      <Carousel page='landing2' />

      {/* World Map */}
      {/* Footer */}
      {/* Router can render nav / footer conditionally on each page */}
    </>
  );
}
