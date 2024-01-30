import React from "react";
import "./ItemCard.css";

const ItemCard = ({ item }, props) => {
  // console.log(item);
  const firstImgExists =
    item?.attributes?.images?.data[0]?.attributes?.url !== null;

  const firstImage = firstImgExists
    ? item?.attributes?.images?.data[0]?.attributes?.url
    : undefined;

  return (
    <div className='item-card-outer-wrapper'>
      <img
        // if not in stock provide utility class to change image opacity
        className={`item-card-img ${
          item.attributes.inStock ? "" : "out-of-stock"
        }`}
        src={
          firstImage !== null
            ? process.env.REACT_APP_UPLOAD_URL + firstImage
            : null
        }
        alt={item?.attributes?.alt}
      />
      <div
        className={`item-card-text-wrapper ${
          item.attributes.inStock ? "" : "out-of-stock"
        }`}
      >
        <p>{item?.attributes?.title}</p>
        {/* <p>{item?.attributes?.color}</p> */}
        <p>{`$${item?.attributes?.price} USD`}</p>
      </div>
    </div>
  );
};

export default ItemCard;
