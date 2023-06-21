import React from "react";
import "./styles/Button.css";

export default function Button(props) {
  return <button className={props.className}>{props.title}</button>;
}
