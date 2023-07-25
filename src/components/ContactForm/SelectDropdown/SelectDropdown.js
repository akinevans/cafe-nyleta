import React from "react";
import { useState } from "react";
import "./SelectDropdown.css";
import arrow from "../../../assets/icons/down-arrow.svg";

export default function SelectDropdown(props) {
  const [visible, setVisible] = useState(false);
  const [label, setLabel] = useState("Service");

  return (
    <div className='dropdown-outer-wrapper'>
      <button
        // Bold the button text anytime its value is not === 'Service'
        className={`service-button ${label === "Service" ? "" : "bold"}`}
        id='button'
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {label}
        <img src={arrow} alt='' className='arrow' />
      </button>

      <div
        className={`dropdown-wrapper ${visible ? "" : "hidden"}`}
        id='dropdown'
      >
        {/* <label for='Service' className='select-item'>
          Service
        </label> */}

        <input
          type='radio'
          id='select-design'
          name='Design'
          value='Design'
          className='option'
        ></input>

        <label
          for='Design'
          className='select-item'
          //& call function to set buttons value, adn reset dropdown visibility
          onClick={() => {
            setLabel("Design");
            setVisible(!visible);
          }}
        >
          Design
        </label>

        <input
          type='radio'
          id='select-sourcing'
          name='Sourcing'
          value='Sourcing'
          className='option'
        ></input>

        <label
          for='Sourcing'
          className='select-item'
          onClick={() => {
            setLabel("Sourcing");
            setVisible(!visible);
          }}
        >
          Sourcing
        </label>

        <input
          type='radio'
          id='select-consulting'
          name='Consulting'
          value='Consulting'
          className='option'
        ></input>

        <label
          for='Consulting'
          className='select-item'
          onClick={() => {
            setLabel("Consulting");
            setVisible(!visible);
          }}
        >
          Consulting
        </label>

        <input
          type='radio'
          id='select-product'
          name='Product Development'
          value='Product Development'
          className='option'
        ></input>

        <label
          for='Product Development'
          className='select-item'
          onClick={() => {
            setLabel("Product Development");
            setVisible(!visible);
          }}
        >
          Product Development
        </label>

        <input
          type='radio'
          id='select-distribution'
          name='Distribution'
          value='Distribution'
          className='option'
        ></input>

        <label
          for='Distribution'
          className='select-item'
          onClick={() => {
            setLabel("Distribution");
            setVisible(!visible);
          }}
        >
          Distribution
        </label>
      </div>
    </div>
  );
}
