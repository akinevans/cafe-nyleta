import React from "react";
import "./ImageComp.css";

export default function ImageComp(props) {
  return <img className={props.className} src={props.src} alt={props.alt} />;
}
