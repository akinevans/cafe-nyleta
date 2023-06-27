import React from "react";
import Quote from "../components/Quote/Quote";
import cafe from "../assets/images/about/01_head_banner.jpg";
import cup from "../assets/images/about/02_cup.jpg";
import joss_sticks from "../assets/images/about/03_joss_sticks.jpg";

export default function About() {
  const aboutPageData = {
    image1: cafe,
    image2: cup,
    image3: joss_sticks,

    alt1: "man sitting in a cafe",

    aboutQuoteText:
      "“Coffee and Cafes are a celebration of life's simple pleasures, a sensory experience that combines aroma, taste and ambiance to create a unique and indulgent moment.”",

    aboutAuthor: "Jack Mahaley, Lead Designer",
  };
  return (
    <>
      <Quote
        quoteText={aboutPageData.aboutQuoteText}
        author={aboutPageData.aboutAuthor}
      />
    </>
  );
}
