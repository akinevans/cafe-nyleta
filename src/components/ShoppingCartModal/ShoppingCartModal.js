import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./ShoppingCartModal.css";
import ShoppingCartItem from "../ShoppingCartItem/ShoppingCartItem";
import Button from "../Button/Button";

export default function ShoppingCartModal(props) {
  const products = useSelector((state) => state.cart.products);
  console.log(products);

  return (
    <div className={`cart-modal-page-wrapper ${props.className}`}>
      <div className='cart-wrapper'>
        <h1>{`My Cart (${props.headerQuantity})`}</h1>

        {/* //TODO: map over cart data and return a ShoppingCartItem component for each product */}
        {/* {console.log(props.quantity)} */}

        {products.map((data) => (
          <ShoppingCartItem
            name={data.title}
            price={data.price}
            imgSrc={process.env.REACT_APP_UPLOAD_URL + data?.image}
            imgAlt={data.title}
            navigationLink={`/itemdetail/${data.id}`}
            closeBtnOnClick={props.closeBtnOnClick}
          />
        ))}
        <div className='cart-btn-wrapper'>
          <Button
            className='btn white back-to-shop'
            title='Close'
            onClick={props.closeBtnOnClick}
          />
          <Button
            className='btn grey back-to-shop'
            title='Checkout'
            onClick={props.checkoutBtnOnClick}
          />
        </div>
      </div>
    </div>
  );
}
