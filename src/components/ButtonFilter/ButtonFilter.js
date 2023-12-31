import React, { useState } from "react";
import "./ButtonFilter.css";

export default function ButtonFilter(props) {
  const [selected, setSelected] = useState("M");

  return (
    <div className={`button-filter-outer-wrapper ${props.className}`}>
      {/* select size on click */}
      <button
        onClick={(e) => {
          props.sizeOnClick(e.target.textContent);
          setSelected("S");
        }}
        className={`filter-btn ${selected === "S" ? "selected" : ""}`}
      >
        S
      </button>
      <button
        onClick={(e) => {
          props.sizeOnClick(e.target.textContent);
          setSelected("M");
        }}
        className={`filter-btn ${selected === "M" ? "selected" : ""}`}
      >
        M
      </button>
      <button
        onClick={(e) => {
          props.sizeOnClick(e.target.textContent);
          setSelected("L");
        }}
        className={`filter-btn ${selected === "L" ? "selected" : ""}`}
      >
        L
      </button>
      <button
        onClick={(e) => {
          props.sizeOnClick(e.target.textContent);
          setSelected("XL");
        }}
        className={`filter-btn ${selected === "XL" ? "selected" : ""}`}
      >
        XL
      </button>
    </div>
  );
}
