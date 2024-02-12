import React from "react";
import { Link, useParams } from "react-router-dom";
import "./AddToCartConfirmationModal.css";

//component imports
import Button from "../../Button/Button";

// utility imports
import useFetch from "../../../hooks/useFetch";
import { useSelector } from "react-redux";
import { getCartQuantityAndPrice } from "../../../utils/shopping";

export default function WaitlistModal(props) {
  const id = useParams().id;
  const { product } = useFetch(`/products/${id}?populate=*`);
  const products = useSelector((state) => state.cart.products);

  return (
    <div
      className={`confirmation-modal-page-wrapper ${props.className}`}
      onClick={props.closeBtnOnClick}
    >
      <div className='confirmation-wrapper'>
        <div className='confirmation-title-wrapper'>
          {/* <h1>{`Added to Cart (${getCartQuantityAndPrice(products)[0]})`}</h1> */}
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
