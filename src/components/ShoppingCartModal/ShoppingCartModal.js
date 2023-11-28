import React from "react";
import { useSelector } from "react-redux";

import "./ShoppingCartModal.css";
import ShoppingCartItem from "../ShoppingCartItem/ShoppingCartItem";
import Button from "../Button/Button";

export default function ShoppingCartModal(props) {
  const products = useSelector((state) => state.cart.products);
  // console.log(products);

  //! export to module
  const getCartQuantityAndPrice = () => {
    let totalQuantity = 0;
    let totalPrice = 0;
    let individualItemQuantity = 0;

    for (let i = 0; i < products.length; i++) {
      totalQuantity += products[i].itemQuantity;
      individualItemQuantity = products[i].itemQuantity;
    }
    return [individualItemQuantity, totalPrice, totalQuantity];
  };

  return (
    <div className={`cart-modal-page-wrapper ${props.className}`}>
      <div className='cart-wrapper'>
        <h1>{`My Cart (${getCartQuantityAndPrice()[2]})`}</h1>

        {products.map((data) => (
          <ShoppingCartItem
            name={data.title}
            price={data.price}
            individualItemQuantity={getCartQuantityAndPrice()[0]}
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
