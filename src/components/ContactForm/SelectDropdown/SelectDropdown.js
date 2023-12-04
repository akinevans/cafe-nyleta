import React from "react";
import { useState } from "react";
import "./SelectDropdown.css";
import arrow from "../../../assets/icons/down-arrow.svg";

export default function SelectDropdown(props) {
  const [visible, setVisible] = useState(false);
  const [label, setLabel] = useState("Service");

  const contactFormData = [
    {
      id: "select-design",
      key: 0,
      value: "Design",
    },
    {
      id: "select-sourcing",
      key: 1,
      value: "Sourcing",
    },
    {
      id: "select-consulting",
      key: 2,
      value: "Consulting",
    },
    {
      id: "select-product",
      key: 3,
      value: "Product Development",
    },
    {
      id: "select-distribution",
      key: 4,
      value: "Distribution",
    },
  ];

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
        {contactFormData.map((element) => (
          <div className='option-wrapper' key={element.key}>
            <input
              type='radio'
              id={element.id}
              name={element.value}
              value={element.value}
              className='option'
            ></input>

            <label
              htmlFor={element.value}
              className='select-item'
              onClick={() => {
                setLabel(element.value);
                setVisible(!visible);
              }}
            >
              {element.value}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
