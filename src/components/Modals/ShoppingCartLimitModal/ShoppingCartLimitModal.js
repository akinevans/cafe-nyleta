import React from "react";
import Button from "../../Button/Button";
import "./ShoppingCartLimitModal.css";

export default function ShoppingCartLimitModal(props) {
  return (
    <div
      className={`limit-modal-page-wrapper ${props.className}`}
      onClick={props.closeBtnOnClick}
    >
      <div className='limit-inner-wrapper'>
        <div className='limit-body-wrapper'>
          <h1>Limit five per customer per size</h1>
        </div>
        <div className='limit-btn-wrapper'>
          <Button
            className='btn white back-to-shop'
            title='Close'
            onClick={props.closeBtnOnClick}
          />
        </div>
      </div>
    </div>
  );
}
