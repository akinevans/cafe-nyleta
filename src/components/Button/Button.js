import React from "react";
import "./Button.css";

export default function Button(props) {
  return (
    <button
      className={props.className}
      type={props.type}
      onClick={props.onClick}
      value={props.title}
    >
      {props.title}
    </button>
  );
}
