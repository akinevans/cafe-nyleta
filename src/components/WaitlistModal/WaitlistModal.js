import React from "react";
import { useState } from "react";
import "./WaitlistModal.css";
import Button from "../Button/Button";
import arrow from "../../assets/icons/down-arrow.svg";

export default function WaitlistModal(props) {
  const [visible, setVisible] = useState(false);
  const [label, setLabel] = useState("1");

  return (
    <div className={`waitlist-modal-page-wrapper ${props.className}`}>
      <div className='waitlist-wrapper'>
        {/* if props.quantity is undefined, display nothing */}
        <h1>{`${props.header} ${props.quantity ? props.quantity : ""}`}</h1>
        {/* Body Wrapper will get top and bottom underlines */}
        <div className='waitlist-body-wrapper'>
          <div className='waitlist-left'>
            <img src={props.src} alt={props.alt} className='waitlist-img' />
          </div>
          <div className='waitlist-right'>
            <div className='waitlist-detail'>
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
              className={`waitlist-dropdown-wrapper ${visible ? "" : "hidden"}`}
              id='dropdown'
            >
              <input
                type='radio'
                id='select-0'
                name='0'
                value='0'
                className='waitlist-option'
              ></input>

              <label
                htmlFor='0'
                className='waitlist-select-item'
                onClick={() => {
                  setLabel("0");
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
                className='waitlist-option'
              ></input>

              <label
                htmlFor='1'
                className='waitlist-select-item'
                onClick={() => {
                  setLabel("1");
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
                className='waitlist-option'
              ></input>

              <label
                htmlFor='2'
                className='waitlist-select-item'
                onClick={() => {
                  setLabel("2");
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
                className='waitlist-option'
              ></input>

              <label
                htmlFor='3'
                className='waitlist-select-item'
                onClick={() => {
                  setLabel("3");
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
                className='waitlist-option'
              ></input>

              <label
                htmlFor='4'
                className='waitlist-select-item'
                onClick={() => {
                  setLabel("4");
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
                className='waitlist-option'
              ></input>

              <label
                htmlFor='5'
                className='waitlist-select-item'
                onClick={() => {
                  setLabel("5");
                  setVisible(!visible);
                }}
              >
                5
              </label>
            </div>
          </div>
        </div>
        <div className='waitlist-btn-wrapper'>
          <Button
            className='btn white back-to-shop'
            title='Close'
            onClick={props.btnOnClick}
          />
          <Button
            className='btn grey back-to-shop'
            title='Add to cart'
            onClick={props.btnOnClick}
          />
        </div>
      </div>
    </div>
  );
}
