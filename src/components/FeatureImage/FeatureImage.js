import React from "react";
import "./FeatureImage.css";

export default function FeatureImage(props) {
  return (
    <img
      //
      className='hero-img'
      src={props.image}
      alt={props.alt}
    />
  );
}
