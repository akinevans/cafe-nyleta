import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ShoppingCartItem.css";

// utility imports
import useFetch from "../../hooks/useFetch";
import { useDispatch } from "react-redux";
import { addToCart, removeItem } from "../../redux/cartReducer";
import { updateProductQuantity } from "../../utils/shoppingLogic";

export default function ShoppingCartItem(props, { data }) {
  //Window width for showing / hiding price on mobile screens
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  const { product } = useFetch(`/products/${props.id}?populate`);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className='item-wrapper'>
      <div className='cart-left'>
        <Link
          to={props.navigationLink}
          onClick={() => {
            // close the modal from ShoppingCartModal, and navigate to item page
            props.closeBtnOnClick();
          }}
        >
          <img src={props.imgSrc} alt={props.imgAlt} className='cart-img' />
        </Link>
        <div className='cart-detail'>
          <h2>{`${props.name} ${
            product.attributes?.color ? "- " + props.color : ""
          }`}</h2>
          <h2>{`Size: ${props.size}`}</h2>
          <h2
            className={`item-price ${windowSize[0] <= 450 ? "" : "hidden"}`}
          >{`$${props.price} USD`}</h2>
        </div>
      </div>
      <div className='cart-right'>
        <div className='increment-and-remove-btn-wrapper'>
          <div className='increment-btn-wrapper'>
            <button
              onClick={() => {
                let newQuantity = updateProductQuantity(
                  "decrement",
                  props.individualItemQuantity
                );
                if (newQuantity) {
                  // alert(newQuantity);
                  dispatch(
                    addToCart({
                      id: product.id,
                      size: props.size,
                      color: props.color,
                      newQuantity,
                    })
                  );
                }
              }}
            >
              -
            </button>

            <p className='quantity'>{props.individualItemQuantity}</p>

            <button
              onClick={() => {
                let newQuantity = updateProductQuantity(
                  "increment",
                  props.individualItemQuantity
                );
                if (newQuantity) {
                  // alert(newQuantity);
                  dispatch(
                    addToCart({
                      id: product.id,
                      size: props.size,
                      color: props.color,
                      newQuantity,
                    })
                  );
                }
              }}
            >
              +
            </button>
          </div>
          <p
            className='remove-btn'
            onClick={() => {
              dispatch(
                removeItem({
                  id: product.id,
                  size: props.size,
                })
              );
            }}
          >
            Remove
          </p>
        </div>
        <h2
          className={`item-price-2 ${windowSize[0] <= 450 ? "hidden" : ""}`}
        >{`$${props.price} USD`}</h2>
      </div>
    </div>
  );
}
