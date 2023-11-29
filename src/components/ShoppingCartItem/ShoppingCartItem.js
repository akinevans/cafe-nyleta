import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateItemQuantity } from "../../redux/cartReducer";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import arrow from "../../assets/icons/down-arrow.svg";
import "./ShoppingCartItem.css";
import { current } from "@reduxjs/toolkit";

export default function ShoppingCartItem(props, { data }) {
  const [visible, setVisible] = useState(false);
  // const [itemQuantity, setItemQuantity] = useState();

  const dispatch = useDispatch();
  const id = useParams().id;
  const { product } = useFetch(`/products/${id}?populate=*`);
  const products = useSelector((state) => state.cart.products);
  console.log(products);
  const currentQuantity = products[0].itemQuantity;

  const [itemQuantity, setItemQuantity] = useState(currentQuantity);

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
            // update quantity in cart when user selects a different value
            alert(num + " selected");
            // set new item quantity
            //! setItemQuantity doesnt update the first time you click it. its async
            setItemQuantity(num);
            alert("itemQuantity value: " + itemQuantity);
            // send the updated item quantity to cartReducer
            dispatch(
              updateItemQuantity({
                //redux payload -> 2 keys
                id: product.id,
                itemQuantity,
              })
            );
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
          <h2>{`$${props.price} USD x ${props.individualItemQuantity}`}</h2>
          <h2>{`$${props.totalItemPrice}`}</h2>
        </div>
        {/* build number selector here */}

        <button
          className='number-dropdown-button'
          id='button'
          onClick={() => {
            setVisible(!visible);
          }}
        >
          {/* {currentQuantity} */}
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
