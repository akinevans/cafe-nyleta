import React from "react";
import { useSelector } from "react-redux";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./AddToCartConfirmationModal.css";
import Button from "../Button/Button";

export default function WaitlistModal(props) {
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
    <div
      className={`confirmation-modal-page-wrapper ${props.className}`}
      onClick={props.closeBtnOnClick}
    >
      <div className='confirmation-wrapper'>
        <div className='confirmation-title-wrapper'>
          {/* <h1>{`Added to Cart (${getCartQuantityAndPrice()[0]})`}</h1> */}
          <h1>Added to Cart</h1>
        </div>
        <div className='confirmation-body-wrapper'>
          <div className='confirmation-left'>
            <Link
              to={`/itemdetail/${product.id}`}
              onClick={props.closeBtnOnClick}
            >
              <img
                src={props.src}
                alt={props.alt}
                className='confirmation-img'
              />
            </Link>
          </div>
          <div className='confirmation-right'>
            <div className='confirmation-detail'>
              <h2>{`${props.name} ${
                product.attributes?.color ? "- " + props.color : ""
              }`}</h2>
              <h2>{`Size: ${props.size}`}</h2>
              <h2>{`$${props.price} USD`}</h2>
            </div>
          </div>
        </div>
        <div className='confirmation-btn-wrapper'>
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
