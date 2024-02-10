//! RENAME COMPONENT TO CART CONFIRMATION MODAL
//! RENAME COMPONENT TO CART CONFIRMATION MODAL
//! RENAME COMPONENT TO CART CONFIRMATION MODAL

import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cartReducer";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./WaitlistModal.css";
import Button from "../Button/Button";
import arrow from "../../assets/icons/down-arrow.svg";

export default function WaitlistModal(props) {
  const [visible, setVisible] = useState(false);
  const [itemQuantity, setItemQuantity] = useState(1);

  const dispatch = useDispatch();
  const id = useParams().id;
  const { product } = useFetch(`/products/${id}?populate=*`);
  const products = useSelector((state) => state.cart.products);
  // console.log(product);

  //^ export to module
  const getCartQuantityAndPrice = () => {
    let totalQuantity = 0;
    let totalPrice = 0;

    for (let i = 0; i < products.length; i++) {
      totalQuantity += products[i].itemQuantity;
    }
    return [totalQuantity, totalPrice];
  };

  return (
    <div className={`waitlist-modal-page-wrapper ${props.className}`}>
      <div className='waitlist-wrapper'>
        <div className='waitlist-title-wrapper'>
          <h1>{`Added to Cart (${getCartQuantityAndPrice()[0]})`}</h1>
        </div>
        <div className='waitlist-body-wrapper'>
          <div className='waitlist-left'>
            <Link
              to={`/itemdetail/${product.id}`}
              onClick={props.closeBtnOnClick}
            >
              <img src={props.src} alt={props.alt} className='waitlist-img' />
            </Link>
          </div>
          <div className='waitlist-right'>
            <div className='waitlist-detail'>
              <h2>{`${props.name} ${
                product.attributes?.color ? "- " + props.color : ""
              }`}</h2>
              <h2>{`Size: ${props.size}`}</h2>
              <h2>{`$${props.price} USD`}</h2>
            </div>
          </div>
        </div>
        <div className='waitlist-btn-wrapper'>
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
