import React from "react";
import { useState } from "react";
import arrow from "../../assets/icons/down-arrow.svg";
import "./ShoppingCartItem.css";

export default function ShoppingCartItem(props, { data }) {
  const [visible, setVisible] = useState(false);
  const [label, setLabel] = useState(1);
  return (
    <div className='item-wrapper'>
      <div className='cart-left'>
        {/* //TODO: get data from redux */}

        <img src={props.imgSrc} alt={props.imgAlt} className='cart-img' />
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
          {label}
          <img src={arrow} alt='' className='arrow' />
        </button>

        <div
          className={`cart-dropdown-wrapper ${visible ? "" : "hidden"}`}
          id='dropdown'
        >
          <input
            type='radio'
            id='select-0'
            name='0'
            value='0'
            className='cart-option'
          ></input>

          <label
            htmlFor='0'
            className='cart-select-item'
            onClick={() => {
              setLabel(0);
              setVisible(!visible);
            }}
          >
            0
          </label>

          <input
            type='radio'
            id='select-1'
            name='1'
            value='1'
            className='cart-option'
          ></input>

          <label
            htmlFor='1'
            className='cart-select-item'
            onClick={() => {
              setLabel(1);
              setVisible(!visible);
            }}
          >
            1
          </label>

          <input
            type='radio'
            id='select-2'
            name='2'
            value='2'
            className='cart-option'
          ></input>

          <label
            htmlFor='2'
            className='cart-select-item'
            onClick={() => {
              setLabel(2);
              setVisible(!visible);
            }}
          >
            2
          </label>

          <input
            type='radio'
            id='select-3'
            name='3'
            value='3'
            className='cart-option'
          ></input>

          <label
            htmlFor='3'
            className='cart-select-item'
            onClick={() => {
              setLabel(3);
              setVisible(!visible);
            }}
          >
            3
          </label>

          <input
            type='radio'
            id='select-4'
            name='4'
            value='4'
            className='cart-option'
          ></input>

          <label
            htmlFor='4'
            className='cart-select-item'
            onClick={() => {
              setLabel(4);
              setVisible(!visible);
            }}
          >
            4
          </label>

          <input
            type='radio'
            id='select-5'
            name='5'
            value='5'
            className='cart-option'
          ></input>

          <label
            htmlFor='5'
            className='cart-select-item'
            onClick={() => {
              setLabel(5);
              setVisible(!visible);
            }}
          >
            5
          </label>
        </div>
      </div>
    </div>
  );
}
