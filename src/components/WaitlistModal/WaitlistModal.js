import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";

import "./WaitlistModal.css";
import Button from "../Button/Button";
import arrow from "../../assets/icons/down-arrow.svg";

export default function WaitlistModal(props) {
  const [visible, setVisible] = useState(false);
  const [itemQuantity, setItemQuantity] = useState(1);
  const [cartQuantity, setCartQuantity] = useState(0);

  // const apiFilterPath = "&[filters][type][$eq]=";
  const id = useParams().id;

  // const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();
  const { product, loading, error } = useFetch(`/products/${id}?populate=*`);

  const handleCartQuantity = (currentItemQuantity) => {
    // const prevItemQuantity = itemQuantity;
    if (currentItemQuantity > 0) {
      setCartQuantity(cartQuantity + currentItemQuantity);
    }
    //TODO: code to remove items from cart
  };

  return (
    <div className={`waitlist-modal-page-wrapper ${props.className}`}>
      <div className='waitlist-wrapper'>
        {/* if props.quantity is undefined, display nothing */}
        <h1>{`My Cart ${cartQuantity}`}</h1>
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
              {itemQuantity}
              <img src={arrow} alt='' className='arrow' />
            </button>

            <div
              className={`waitlist-dropdown-wrapper ${visible ? "" : "hidden"}`}
              id='dropdown'
            >
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
                  setItemQuantity(1);
                  console.log(itemQuantity);
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
                  setItemQuantity(2);
                  // console.log(quantity);
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
                  setItemQuantity(3);
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
                  setItemQuantity(4);
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
                  setItemQuantity(5);
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
            onClick={props.closeBtnOnClick}
          />
          <Button
            className='btn grey back-to-shop'
            title='Add to cart'
            onClick={() => {
              handleCartQuantity(itemQuantity);

              dispatch(
                addToCart({
                  //redux payload -> 5 keys
                  id: product.id,
                  title: product.attributes.title,
                  description: product.attributes.description,
                  price: product.attributes.price,
                  image: product.attributes.images.data[0].attributes.url,
                  itemQuantity,
                })
              );
            }}
          />
        </div>
      </div>
    </div>
  );
}
