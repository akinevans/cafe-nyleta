import React, { useState } from "react";
import "./ButtonFilter.css";

export default function ButtonFilter(props) {
  const [size, setSize] = useState(null);

  return (
    <div className={`button-filter-outer-wrapper ${props.className}`}>
      {/* select size on click */}
      <button
        onClick={(e) => {
          props.sizeOnClick(e.target.textContent);
        }}
        className='filter-btn'
      >
        S
      </button>
      <button
        className='filter-btn'
        onClick={(e) => {
          props.sizeOnClick(e.target.textContent);
        }}
      >
        M
      </button>
      <button
        className='filter-btn'
        onClick={(e) => {
          props.sizeOnClick(e.target.textContent);
        }}
      >
        L
      </button>
      <button
        className='filter-btn'
        onClick={(e) => {
          props.sizeOnClick(e.target.textContent);
        }}
      >
        XL
      </button>
    </div>
  );
}
