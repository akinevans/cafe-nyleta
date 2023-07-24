import React from "react";
import "./WaitlistModal.css";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import shirt from "../../assets/images/shop/workshirt_white_02.jpg";

export default function WaitlistModal(props) {
  return (
    <div className='waitlist-wrapper'>
      <h1>Added to Waitlist</h1>
      {/* Body Wrapper will get top and bottom underlines */}
      <div className='waitlist-body-wrapper'>
        <div className='waitlist-left'>
          <img src={shirt} alt='' className='waitlist-img' />
        </div>
        <div className='waitlist-right'>
          <div className='waitlist-detail'>
            <h2>{props.name}</h2>
            <h2>{`Size: ${props.size}`}</h2>
            <h2>{`$${props.price} USD`}</h2>
          </div>
          {/* build number selector here */}
        </div>
      </div>
      <div className='waitlist-btn-wrapper'>
        <Link to='/shop'>
          <Button className='btn grey back-to-shop' title='Back to shop' />
        </Link>
      </div>
    </div>
  );
}
