import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeItem } from "../../redux/cartReducer";
import useFetch from "../../hooks/useFetch";
import { Link } from "react-router-dom";
import "./ShoppingCartItem.css";

//TODO: add UI elements to zero out an item from the cart
export default function ShoppingCartItem(props, { data }) {
  const dispatch = useDispatch();
  const { product } = useFetch(`/products/${props.id}?populate`);

  // products and state works perfectly, don't change
  const products = useSelector((state) => state.cart.products);

  //! this state is where each shoppingCartItem component gets its starting quantity
  const [productQuantity, setProductQuantity] = useState(
    props.individualItemQuantity
  );
  const maxQuantityPerProduct = 5;
  const minQuantityPerProduct = 1;

  // console.log(product);
  // console.log(products);
  // console.log(typeof productQuantity);

  //get correct product by matching id and size
  const getProduct = (id, size) => {
    // console.log(id, size);
    for (let i = 0; i < products.length; i++) {
      if (id === products[i].id && size === products[i].size) {
        // setProductQuantity(products[i].itemQuantity);
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
    if (operation === "increment") {
      if (productQuantity < maxQuantityPerProduct) {
        setProductQuantity(currentQuantity + 1);
        const newQuantity = productQuantity + 1;
        dispatch(
          addToCart({
            id: product.id,
            size: props.size,
            newQuantity,
          })
        );
      }
    } else if (operation === "decrement") {
      if (productQuantity > minQuantityPerProduct) {
        setProductQuantity(currentQuantity - 1);
        const newQuantity = productQuantity - 1;
        dispatch(
          addToCart({
            id: product.id,
            size: props.size,
            newQuantity,
          })
        );
      }
    } else return;
    // console.log(productQuantity);
  };

  return (
    <div className='item-wrapper'>
      <div className='cart-left'>
        <Link
          to={props.navigationLink}
          onClick={() => {
            alert("close modal");
          }}
        >
          <img src={props.imgSrc} alt={props.imgAlt} className='cart-img' />
        </Link>
        <div className='cart-detail'>
          <h2>{props.name}</h2>
          <h2>{`Size: ${props.size}`}</h2>
        </div>
      </div>
      <div className='cart-right'>
        <div className='increment-btn-wrapper'>
          <button
            onClick={() => {
              updateProductQuantity(
                "decrement",
                getProduct(props.id, props.size)
              );
              // console.log(itemQuantity);
            }}
          >
            -
          </button>

          <p className='quantity'>{productQuantity}</p>
          {/* <p className='quantity'>{props.individualItemQuantity}</p> */}

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

        <h2 className='item-price'>{`$${props.price} USD`}</h2>
      </div>
    </div>
  );
}
