import React from "react";
import "./ItemCard.css";

const ItemCard = ({ item }) => {
  console.log(item);
  return (
    <div className='item-card-outer-wrapper'>
      <img
        src={
          process.env.REACT_APP_UPLOAD_URL +
          item?.attributes?.image?.data?.attributes?.url
        }
        alt={item?.attributes?.description}
        className={`item-card-img ${item.className}`}
      />
      <div className='item-card-text-wrapper'>
        <p>{item?.attributes?.title}</p>
        <p>{`$${item?.attributes?.price} USD`}</p>
      </div>
    </div>
  );
};

export default ItemCard;
