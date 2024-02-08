import React from "react";
import "./ImageComp.css";

export default function ImageComp(props) {
  return (
    <img
      loading='lazy'
      className={props.className}
      src={props.src}
      alt={props.alt}
    />
  );
}
