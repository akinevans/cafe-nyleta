import React from "react";
import "./FeatureImage.css";

export default function FeatureImage(props) {
  return (
    <img
      // width height attributes help page performance, though css overwrites this it still helps
      loading={props.loading}
      className={`hero-img ${props.className}`}
      src={props.image}
      alt={props.alt}
      width={props.width}
      height={props.height}
    />
  );
}
