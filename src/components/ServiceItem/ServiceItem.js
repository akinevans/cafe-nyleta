import React from "react";
import "./ServiceItem.css";
import plus from "../../assets/icons/plus-sign.svg";
import minus from "../../assets/icons/minus-sign.svg";

export default function ServiceItem(props) {
  return (
    <div className='service-item-outer-wrapper'>
      <div className='service-item-inner-wrapper'>
        <div className='service-item-title-wrapper'>
          <h1 className='service-item-title'>{props.title}</h1>
          <img src={plus} alt='plus sign' />
        </div>
        {/* apply hidden class here. i think */}
        <div className='message-wrapper hidden'>
          <p className='service-item-message'>{props.message}</p>
        </div>
      </div>
    </div>
  );
}
