import React, { useState } from "react";
import { useSelector } from "react-redux";

import "./ShoppingCartModal.css";
import ShoppingCartItem from "../ShoppingCartItem/ShoppingCartItem";
import Button from "../Button/Button";

export default function ShoppingCartModal(props) {
  const products = useSelector((state) => state.cart.products);
  // console.log(products);

  //! export to module
  //* This function serves 3 purposes. To get total quantity, total price, and individual quantity
  const getCartQuantityAndPrice = () => {
    let totalQuantity = 0;
    let totalPrice = 0;

    // calculate total cart quantity and total cost
    for (let i = 0; i < products.length; i++) {
      let itemPrice = products[i].price;
      let itemQuantity = products[i].itemQuantity;
      let itemCost = itemPrice * itemQuantity;

      totalQuantity += itemQuantity;
      totalPrice += itemCost;
    }

    return [totalPrice.toFixed(2), totalQuantity];
  };

  const cartEmpty = getCartQuantityAndPrice()[0] <= 0;

  return (
    <div className={`cart-modal-page-wrapper ${props.className}`}>
      <div className='cart-wrapper'>
        <h1>{`My Cart (${getCartQuantityAndPrice()[1]})`}</h1>
        <h1>{`Total Price: $${getCartQuantityAndPrice()[0]}`}</h1>
        <h1
          className={`cart-empty-message ${cartEmpty ? "visible" : "hidden"}`}
        >
          Cart Empty
        </h1>
        {products.map((data) => (
          <ShoppingCartItem
            id={data.id}
            //! update key once sizes are included, multiple children will have the same id (id + size will work)
            key={data.id}
            name={data.title}
            price={data.price}
            individualItemQuantity={data.itemQuantity}
            totalItemPrice={data.itemQuantity * data.price}
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
            className={`btn grey back-to-shop ${cartEmpty ? " disabled " : ""}`}
            title='Checkout'
            onClick={!cartEmpty ? props.checkoutBtnOnClick : null}
          />
        </div>
      </div>
    </div>
  );
}
