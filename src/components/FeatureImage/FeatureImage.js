import React from "react";
import "./FeatureImage.css";

export default function FeatureImage(props) {
  return (
    <img
      //
      loading={props.loading}
      className={`hero-img ${props.className}`}
      src={props.image}
      alt={props.alt}
    />
  );
}
