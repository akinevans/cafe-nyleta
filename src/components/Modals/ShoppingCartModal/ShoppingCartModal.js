import React from "react";

//component imports
import ShoppingCartItem from "../../ShoppingCartItem/ShoppingCartItem";
import Button from "../../Button/Button";
import "./ShoppingCartModal.css";

// utility imports
import { useSelector } from "react-redux";
import { getCartQuantityAndPrice } from "../../../utils/shoppingLogic";

export default function ShoppingCartModal(props) {
  const products = useSelector((state) => state.cart.products);
  const cartEmpty = getCartQuantityAndPrice(products)[0] <= 0;
  let cartQuantity = getCartQuantityAndPrice(products)[0];
  let cartPrice = getCartQuantityAndPrice(products)[1];

  return (
    <div
      className={`cart-modal-page-wrapper ${props.className}`}
      // onClick={props.closeBtnOnClick}
    >
      <div className='cart-wrapper'>
        <div className='top-cart-title-wrapper'>
          <h1>{`Cart (${cartQuantity})`}</h1>
        </div>
        <h1
          className={`cart-empty-message ${cartEmpty ? "visible" : "hidden"}`}
        >
          Cart Empty
        </h1>
        <div className='shopping-cart-item-component-wrapper'>
          {products.map((data) => (
            <ShoppingCartItem
              id={data.id}
              key={data.id + data.size}
              name={data.title}
              price={data.price}
              color={data.color}
              size={data.size}
              individualItemQuantity={data.itemQuantity}
              totalItemPrice={data.itemQuantity * data.price}
              imgSrc={process.env.REACT_APP_UPLOAD_URL + data?.image}
              imgAlt={`${data.title} ${data.color ? data.color : ""}`}
              navigationLink={`/itemdetail/${data.id}`}
              closeBtnOnClick={props.closeBtnOnClick}
            />
          ))}
        </div>
        <div className='total-wrapper'>
          <h1 className={`cart-text ${cartEmpty ? "hidden" : ""}`}>
            {`Total (${cartQuantity}):`}{" "}
            <span className='cart-price'>${cartPrice} USD</span>{" "}
          </h1>
          <div className='cart-btn-wrapper'>
            <Button
              className='btn white back-to-shop'
              title='Close'
              onClick={props.closeBtnOnClick}
            />
            <Button
              className={`btn grey back-to-shop ${
                cartEmpty ? " disabled " : ""
              }`}
              title='Check out'
              onClick={!cartEmpty ? props.checkoutBtnOnClick : null}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
