import React from "react";
import "./Carousel.css";
import ImageComp from "../../components/ImageComp/ImageComp";
// Image imports for top carousel Landing Page
import c101 from "../../assets/images/home/carousel-1/carousel_101.jpg";
import c102 from "../../assets/images/home/carousel-1/carousel_102.jpg";
import c303 from "../../assets/images/home/carousel-1/carousel_103.jpg";
import c404 from "../../assets/images/home/carousel-1/carousel_104.jpg";
import c505 from "../../assets/images/home/carousel-1/carousel_105.jpg";
import c606 from "../../assets/images/home/carousel-1/carousel_106.jpg";
import c707 from "../../assets/images/home/carousel-1/carousel_107.jpg";
import c108 from "../../assets/images/home/carousel-1/carousel_108.jpg";

// Image imports for bottom carousel Landing Page
import c201 from "../../assets/images/home/carousel-2/carousel_201.jpeg";
import c202 from "../../assets/images/home/carousel-2/carousel_202.jpeg";
import c203 from "../../assets/images/home/carousel-2/carousel_203.jpeg";
import c204 from "../../assets/images/home/carousel-2/carousel_204.jpeg";
import c205 from "../../assets/images/home/carousel-2/carousel_205.jpeg";
import c206 from "../../assets/images/home/carousel-2/carousel_206.jpeg";
import c207 from "../../assets/images/home/carousel-2/carousel_207.jpeg";
import c208 from "../../assets/images/home/carousel-2/carousel_208.jpeg";
//! Images should scroll on X axis with both scroll wheels

export default function Carousel(props) {
  const large = "img large";
  const small = "img small";
  const description = "fashion model;";

  const LandingPageData1 = [
    {
      name: "c101",
      className: large,
      src: c101,
      alt: description,
    },
    {
      name: "c102",
      className: large,
      src: c102,
      alt: description,
    },
    {
      name: "c103",
      className: large,
      src: c303,
      alt: description,
    },
    {
      name: "c104",
      className: large,
      src: c404,
      alt: description,
    },
    {
      name: "c105",
      className: large,
      src: c505,
      alt: description,
    },
    {
      name: "c106",
      className: large,
      src: c606,
      alt: description,
    },
    {
      name: "c107",
      className: large,
      src: c707,
      alt: description,
    },
    {
      name: "c108",
      className: `${large} last`,
      src: c108,
      alt: description,
    },
  ];

  const LandingPageData2 = [
    {
      name: "c201",
      className: small,
      src: c201,
      alt: description,
    },
    {
      name: "c202",
      className: small,
      src: c202,
      alt: description,
    },
    {
      name: "c203",
      className: small,
      src: c203,
      alt: description,
    },
    {
      name: "c204",
      className: small,
      src: c204,
      alt: description,
    },
    {
      name: "c205",
      className: small,
      src: c205,
      alt: description,
    },
    {
      name: "c206",
      className: small,
      src: c206,
      alt: description,
    },
    {
      name: "c207",
      className: small,
      src: c207,
      alt: description,
    },
    {
      name: "c208",
      className: `${small} last`,
      src: c208,
      alt: description,
    },
  ];

  function displayLanding1(page) {
    if (page === "landing1") {
      return LandingPageData1.map((item) => (
        <ImageComp {...item} key={item.name} />
      ));
    } else if (page === "landing2") {
      return LandingPageData2.map((item) => (
        <ImageComp {...item} key={item.name} />
      ));
    }
  }

  //^ Write Function to change cursor from hand to grabbing on click and release

  return (
    <div className='carousel-outer-wrapper'>
      <div className={"carousel-inner-wrapper"}>
        {/* props.page value is coming from Landing component */}
        {displayLanding1(props.page)}

        {/* add utility classes for each carousel size */}
        {/* write a function to get image data instead of hard coding it */}
        {/* return props.page */}
      </div>
    </div>
  );
}
