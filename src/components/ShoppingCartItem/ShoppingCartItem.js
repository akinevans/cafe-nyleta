import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import arrow from "../../assets/icons/down-arrow.svg";
import "./ShoppingCartItem.css";

export default function ShoppingCartItem(props, { data }) {
  const [visible, setVisible] = useState(false);
  const [itemQuantity, setItemQuantity] = useState(1);

  //TODO: Cart should have the ability to change total product quantity
  const quantityLabels = [1, 2, 3, 4, 5];
  const generateQuantityLabels = (num) => {
    return (
      <>
        <input
          type='radio'
          id={`select-${num}`}
          name={num}
          value={num}
          className='cart-option'
        ></input>
        <label
          htmlFor={num}
          className='cart-select-item'
          onClick={() => {
            setItemQuantity(num);
            // console.log(itemQuantity);
            setVisible(!visible);
          }}
        >
          {num}
        </label>
      </>
    );
  };

  return (
    <div className='item-wrapper'>
      <div className='cart-left'>
        {/* //TODO: get data from redux */}
        <Link
          to={props.navigationLink}
          onClick={() => {
            alert("close modal");
          }}
        >
          <img src={props.imgSrc} alt={props.imgAlt} className='cart-img' />
        </Link>
      </div>
      <div className='cart-right'>
        <div className='cart-detail'>
          <h2>{props.name}</h2>
          <h2>{`Size: ${props.size}`}</h2>
          <h2>{`$${props.price} USD`}</h2>
        </div>
        {/* build number selector here */}

        <button
          className='number-dropdown-button'
          id='button'
          onClick={() => {
            setVisible(!visible);
          }}
        >
          {itemQuantity}
          <img src={arrow} alt='' className='arrow' />
        </button>

        <div
          className={`cart-dropdown-wrapper ${visible ? "" : "hidden"}`}
          id='dropdown'
        >
          {quantityLabels.map(generateQuantityLabels)}
        </div>
      </div>
    </div>
  );
}
