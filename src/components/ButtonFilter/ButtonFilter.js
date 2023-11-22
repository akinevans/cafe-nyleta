import React from "react";
import "./ButtonFilter.css";

export default function ButtonFilter(props) {
  return (
    <div className={`button-filter-outer-wrapper ${props.className}`}>
      {/* select size on click */}
      <button
        onClick={() => {
          console.log("Small size selected");
        }}
        className='filter-btn'
      >
        S
      </button>
      <button className='filter-btn'>M</button>
      <button className='filter-btn'>L</button>
      <button className='filter-btn'>XL</button>
    </div>
  );
}
