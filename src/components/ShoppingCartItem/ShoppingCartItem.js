import React from "react";
import { Link } from "react-router-dom";
import "./ShoppingCartItem.css";

// utility imports
import useFetch from "../../hooks/useFetch";
import { useDispatch } from "react-redux";
import { addToCart, removeItem } from "../../redux/cartReducer";
import { updateProductQuantity } from "../../utils/shopping";

export default function ShoppingCartItem(props, { data }) {
  const { product } = useFetch(`/products/${props.id}?populate`);
  const dispatch = useDispatch();

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
        <h2 className='item-price'>{`$${props.price} USD`}</h2>
      </div>
    </div>
  );
}
