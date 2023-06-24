import React from "react";
import { useState } from "react";
import "./ServiceItem.css";
import plus from "../../assets/icons/plus-sign.svg";
import minus from "../../assets/icons/minus-sign.svg";

export default function ServiceItem(props) {
  const [open, setOpen] = useState(false);
  return (
    <div className='service-item-outer-wrapper'>
      {/* Click anywhere inside inner wrapper to trigger text display */}
      <div
        onClick={() => {
          setOpen(!open);
        }}
        className={`service-item-inner-wrapper ${open ? "" : ""}`}
      >
        <div className='service-item-title-wrapper'>
          <h1 className='service-item-title'>{props.title}</h1>
          <img
            className={`${open ? "minus" : "plus"}`}
            src={`${open ? minus : plus}`}
            alt=''
          />
        </div>
        {/* We want the message to disappear so we conditionally render it */}
        <div
          className={`message-wrapper ${open ? "visible" : "hidden shrink"}`}
        >
          <p className='service-item-message'>{props.message}</p>
        </div>
      </div>
    </div>
  );
}
