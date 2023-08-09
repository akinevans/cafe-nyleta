import React from "react";
import "./ItemCard.css";

const ItemCard = ({ item }) => {
  // console.log(item);
  return (
    <div className='item-card-outer-wrapper'>
      <img
        // if not in stock provide utility class to change image opacity
        className={`item-card-img ${
          item.attributes.inStock ? "" : "out-of-stock"
        }`}
        src={
          process.env.REACT_APP_UPLOAD_URL +
          item?.attributes?.image?.data?.attributes?.url
        }
        alt={item?.attributes?.description}
      />
      <div
        className={`item-card-text-wrapper ${
          item.attributes.inStock ? "" : "out-of-stock"
        }`}
      >
        <p>{item?.attributes?.title}</p>
        <p>{`$${item?.attributes?.price} USD`}</p>
      </div>
    </div>
  );
};

export default ItemCard;
