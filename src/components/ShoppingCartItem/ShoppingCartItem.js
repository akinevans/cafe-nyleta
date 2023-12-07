import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart, removeItem } from "../../redux/cartReducer";
import useFetch from "../../hooks/useFetch";
import { Link } from "react-router-dom";
import arrow from "../../assets/icons/down-arrow.svg";
import "./ShoppingCartItem.css";

//TODO: add UI elements to zero out an item from the cart
export default function ShoppingCartItem(props, { data }) {
  const [visible, setVisible] = useState(false);

  const dispatch = useDispatch();
  const { product } = useFetch(`/products/${props.id}?populate`);
  // console.log(product);

  const quantityLabels = [0, 1, 2, 3, 4, 5];
  const generateQuantityLabels = (numberLabel) => {
    const newQuantity = numberLabel;
    return (
      <div className='quantity-label-wrapper' key={numberLabel}>
        <input
          type='radio'
          id={`select-${numberLabel}`}
          name={numberLabel}
          value={numberLabel}
          className='cart-option'
        ></input>
        <label
          htmlFor={numberLabel}
          className='cart-select-item'
          onClick={() => {
            // update quantity in cart when user selects a different value by sending newQuantity to addToCart function
            if (newQuantity > 0) {
              dispatch(
                addToCart({
                  id: product.id,
                  size: props.size,
                  newQuantity,
                })
              );
            } else {
              dispatch(
                removeItem({
                  id: product.id,
                  size: props.size,
                  newQuantity,
                })
              );
            }
            setVisible(!visible);
          }}
        >
          {numberLabel}
        </label>
      </div>
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
          <h2>{`$${props.price} USD x ${props.individualItemQuantity}`}</h2>
          <h2>{`$${props.totalItemPrice}`}</h2>
        </div>
        {/* //& Number value picker */}

        <button
          className='number-dropdown-button'
          id='button'
          onClick={() => {
            setVisible(!visible);
          }}
        >
          {props.individualItemQuantity}
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
