import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cartReducer";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";

import "./WaitlistModal.css";
import Button from "../Button/Button";
import arrow from "../../assets/icons/down-arrow.svg";

//TODO: rename this component addToCartModal

export default function WaitlistModal(props) {
  const [visible, setVisible] = useState(false);
  const [itemQuantity, setItemQuantity] = useState(1);

  const dispatch = useDispatch();
  const id = useParams().id;
  const { product } = useFetch(`/products/${id}?populate=*`);
  const products = useSelector((state) => state.cart.products);
  // console.log(product);

  //! export to module
  const getCartQuantityAndPrice = () => {
    let totalQuantity = 0;
    let totalPrice = 0;

    for (let i = 0; i < products.length; i++) {
      totalQuantity += products[i].itemQuantity;
    }
    return [totalQuantity, totalPrice];
  };

  const quantityLabels = [1, 2, 3, 4, 5];

  const generateQuantityLabels = (num) => {
    return (
      <div className='quantity-label-wrapper' key={num}>
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
      </div>
    );
  };

  return (
    <div className={`waitlist-modal-page-wrapper ${props.className}`}>
      <div className='waitlist-wrapper'>
        {/* if props.quantity is undefined, display nothing */}
        <h1>{`My Cart ${getCartQuantityAndPrice()[0]} <--- waitlist modal`}</h1>
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
              dispatch(
                addToCart({
                  //redux payload -> 6 keys
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
