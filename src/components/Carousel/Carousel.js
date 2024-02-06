import React from "react";
import { motion } from "framer-motion";
import "./Carousel.css";
import ImageComp from "../../components/ImageComp/ImageComp";

// Image imports for top carousel Landing Page
import c101 from "../../assets/images/home/carousel-1/carousel_101.jpg";
import c102 from "../../assets/images/home/carousel-1/carousel_102.jpg";
import c103 from "../../assets/images/home/carousel-1/carousel_103.jpg";
import c104 from "../../assets/images/home/carousel-1/carousel_104.jpg";
import c105 from "../../assets/images/home/carousel-1/carousel_105.jpg";
import c106 from "../../assets/images/home/carousel-1/carousel_106.jpg";
import c107 from "../../assets/images/home/carousel-1/carousel_107.jpg";
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

// Image imports for carousel About Page
import c301 from "../../assets/images/about/carousel/carousel_01.jpg";
import c302 from "../../assets/images/about/carousel/carousel_02.jpg";
import c303 from "../../assets/images/about/carousel/carousel_03.jpg";
import c304 from "../../assets/images/about/carousel/carousel_04.jpg";
import c305 from "../../assets/images/about/carousel/carousel_05.jpg";
import c306 from "../../assets/images/about/carousel/carousel_06.jpg";
import c307 from "../../assets/images/about/carousel/carousel_07.jpg";
import c308 from "../../assets/images/about/carousel/carousel_08.jpg";
//! Images should scroll on X axis with both scroll wheels

export default function Carousel(props) {
  // large & small are class names provided to each ImageComp component
  const large = "img large";
  const small = "img small";

  const LandingPageData1 = [
    {
      name: "c101",
      className: large,
      src: c101,
      alt: "Model in pink hat with white striped top and white shorts",
    },
    {
      name: "c102",
      className: large,
      src: c102,
      alt: "Model in White Stussy top, grey cargo pants",
    },
    {
      name: "c103",
      className: large,
      src: c103,
      alt: "Model wearing red, yellow, purple ombre top. Black shorts, and pink sneakers",
    },
    {
      name: "c104",
      className: large,
      src: c104,
      alt: "Model wearing pink Nike sweat suit",
    },
    {
      name: "c105",
      className: large,
      src: c105,
      alt: "Model wearing black, maroon, orange hoodie and brown sweatpants",
    },
    {
      name: "c106",
      className: large,
      src: c106,
      alt: "Two models, the first wearing brown and black hoodie, with Maroon sweatpants. The second wearing black, maroon, orange hoodie and brown sweatpants.",
    },
    {
      name: "c107",
      className: large,
      src: c107,
      alt: "Two models, the first wearing a black hooded jacket with brown pants. The second wearing a black coat.",
    },
    {
      name: "c108",
      className: `${large} last`,
      src: c108,
      alt: "Model wearing a green hoodie underneath a maroon coat, with multicolored white black and maroon pants.",
    },
  ];

  const LandingPageData2 = [
    {
      name: "c201",
      className: small,
      src: c201,
      alt: "A row of factory workers sewing clothing.",
    },
    {
      name: "c202",
      className: small,
      src: c202,
      alt: "A factory sewing machine",
    },
    {
      name: "c203",
      className: small,
      src: c203,
      alt: "Clothing printing press",
    },
    {
      name: "c204",
      className: small,
      src: c204,
      alt: "Loading fabric into a sewing machine",
    },
    {
      name: "c205",
      className: small,
      src: c205,
      alt: "Maintaining a sewing machine",
    },
    {
      name: "c206",
      className: small,
      src: c206,
      alt: "Carving the sole of  a shoe",
    },
    {
      name: "c207",
      className: small,
      src: c207,
      alt: "A stack of clothing materials",
    },
    {
      name: "c208",
      className: `${small} last`,
      src: c208,
      alt: "Green fabric in a sewing machine",
    },
  ];

  const aboutPageData = [
    {
      name: "c301",
      className: large,
      src: c301,
      alt: "Woman wearing white cafe nyleta shirt",
    },
    {
      name: "c302",
      className: large,
      src: c302,
      alt: "incense burning",
    },
    {
      name: "c303",
      className: large,
      src: c303,
      alt: "cafe nyleta floor mat",
    },
    {
      name: "c304",
      className: large,
      src: c304,
      alt: "man wearing cafe nyleta shirt",
    },
    {
      name: "c305",
      className: large,
      src: c305,
      alt: "coffee mug and cigarettes",
    },
    {
      name: "c306",
      className: large,
      src: c306,
      alt: "white and blue cafe nyleta shirt",
    },
    {
      name: "c307",
      className: large,
      src: c307,
      alt: "incense burning",
    },
    {
      name: "c308",
      className: `${large} last`,
      src: c308,
      alt: "man cross the street in a city",
    },
  ];

  function displayImages(page) {
    if (page === "landing1") {
      return LandingPageData1.map((item) => (
        <ImageComp {...item} key={item.name} />
      ));
    } else if (page === "landing2") {
      return LandingPageData2.map((item) => (
        <ImageComp {...item} key={item.name} />
      ));
    } else if (page === "about") {
      return aboutPageData.map((item) => (
        <ImageComp {...item} key={item.name} />
      ));
    }
  }

  //^ Write Function to change cursor from hand to grabbing on click and release

  return (
    <div className='carousel-outer-wrapper'>
      <motion.div className='carousel-inner-wrapper'>
        {/* props.page value is coming from Landing component */}
        {displayImages(props.page)}
      </motion.div>
    </div>
  );
}
