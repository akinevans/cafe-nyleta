import React from "react";
import "./ItemCard.css";

export default function ItemCard(props) {
  return (
    <div className={`${props.className} item-card-outer-wrapper`}>
      <img src={props.src} alt={props.alt} className='item-card-img' />
      <div className='item-card-text-wrapper'>
        <p>{props.description}</p>
        <p>{`$${props.price} USD`}</p>
      </div>
    </div>
  );
}
