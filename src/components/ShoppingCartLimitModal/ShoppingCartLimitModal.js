import React from "react";
import { useSelector } from "react-redux";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./ShoppingCartLimitModal.css";
import Button from "../Button/Button";

export default function ShoppingCartLimitModal(props) {
  const id = useParams().id;
  const { product } = useFetch(`/products/${id}?populate=*`);
  const products = useSelector((state) => state.cart.products);
  // console.log(product);

  //^ export to module
  //   const getCartQuantityAndPrice = () => {
  //     let totalQuantity = 0;
  //     let totalPrice = 0;

  //     for (let i = 0; i < products.length; i++) {
  //       totalQuantity += products[i].itemQuantity;
  //     }
  //     return [totalQuantity, totalPrice];
  //   };

  return (
    <div
      className={`limit-modal-page-wrapper ${props.className}`}
      onClick={props.closeBtnOnClick}
    >
      <div className='limit-inner-wrapper'>
        {/* <h1>Limit 5 per customer, per size</h1> */}

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
