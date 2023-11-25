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

  const dispatch = useDispatch();
  const id = useParams().id;
  const { product, loading, error } = useFetch(`/products/${id}?populate=*`);

  const handleCartQuantity = (currentItemQuantity) => {
    // const prevItemQuantity = itemQuantity;
    if (currentItemQuantity > 0) {
      setCartQuantity(cartQuantity + currentItemQuantity);
    }
    //TODO: code to remove items from cart
  };

  const quantityLabels = [1, 2, 3, 4, 5];
  const generateQuantityLabels = (num) => {
    return (
      <>
        <input
          type='radio'
          id={`select-${num}`}
          name={num}
          value={num}
          className='waitlist-option'
        ></input>
        <label
          htmlFor={num}
          className='waitlist-select-item'
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
              {/* //& Dropdown numbers for item quantity */}
              {quantityLabels.map(generateQuantityLabels)}
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
