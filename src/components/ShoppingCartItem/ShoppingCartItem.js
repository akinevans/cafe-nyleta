import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeItem } from "../../redux/cartReducer";
import useFetch from "../../hooks/useFetch";
import { Link } from "react-router-dom";
import "./ShoppingCartItem.css";

export default function ShoppingCartItem(props, { data }) {
  const { product } = useFetch(`/products/${props.id}?populate`);
  const products = useSelector((state) => state.cart.products);

  const dispatch = useDispatch();

  // console.log(product);
  // console.log(products);
  // console.log(typeof productQuantity);

  //get correct product from cart by matching its id and size
  const getProduct = (id, size) => {
    // console.log(id, size);
    for (let i = 0; i < products.length; i++) {
      if (id === products[i].id && size === products[i].size) {
        // alert("match found!!");
        return products[i].itemQuantity;
      } else {
        continue;
      }
    }
    alert("no match found");
    return;
  };

  const updateProductQuantity = (operation, currentQuantity) => {
    const maxQuantityPerProduct = 5;
    const minQuantityPerProduct = 1;

    if (
      operation === "increment" &&
      props.individualItemQuantity < maxQuantityPerProduct
    ) {
      const newQuantity = props.individualItemQuantity + 1;
      dispatch(
        addToCart({
          id: product.id,
          size: props.size,
          color: props.color,
          newQuantity,
        })
      );
    } else if (
      operation === "decrement" &&
      props.individualItemQuantity > minQuantityPerProduct
    ) {
      const newQuantity = props.individualItemQuantity - 1;
      dispatch(
        addToCart({
          id: product.id,
          size: props.size,
          color: props.color,
          newQuantity,
        })
      );
    } else return;
    // console.log(productQuantity);
  };

  return (
    <div className='item-wrapper'>
      <div className='cart-left'>
        <Link
          to={props.navigationLink}
          onClick={() => {
            // props.closeBtnOnClick -->> will close the modal from ShoppingCartModal, and navigate to item page
            props.closeBtnOnClick();
            // alert("close modal");
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
                updateProductQuantity(
                  "decrement",
                  getProduct(props.id, props.size)
                );
              }}
            >
              -
            </button>

            <p className='quantity'>{props.individualItemQuantity}</p>

            <button
              onClick={() => {
                updateProductQuantity(
                  "increment",
                  getProduct(props.id, props.size)
                );
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
