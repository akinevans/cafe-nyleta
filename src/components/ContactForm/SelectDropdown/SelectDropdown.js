import React from "react";
import { useState } from "react";

// asset imports
import "./SelectDropdown.css";
import arrow from "../../../assets/icons/down-arrow.svg";

// utility imports
import { contactFormData } from "../../../utils/textData";

export default function SelectDropdown(props) {
  const [visible, setVisible] = useState(false);
  const [label, setLabel] = useState("Service");

  return (
    <div className='dropdown-outer-wrapper'>
      <button
        // Bold the button text anytime its value is not === 'Service'
        className={`service-button ${label === "Service" ? "" : "bold"}`}
        type='button'
        id='button'
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {label}
        <img src={arrow} alt='service dropdown arrow' className='arrow' />
      </button>

      <div
        className={`dropdown-wrapper ${visible ? "" : "hidden"}`}
        id='dropdown'
      >
        {contactFormData.map((element) => (
          <div className='option-wrapper' key={element.key}>
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

            <input
              type='radio'
              id={element.value}
              name={element.value}
              value={element.value}
              className='option'
              htmlFor={element.value}
            ></input>
          </div>
        ))}
      </div>
    </div>
  );
}
