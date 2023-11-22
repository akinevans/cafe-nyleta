import React from "react";
import { useState } from "react";
import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import "../pages/page_styling/ItemDetail/ItemDetail.css";
import ShopHeader from "../components/ShopHeader/ShopHeader";
import ButtonFilter from "../components/ButtonFilter/ButtonFilter";
import Button from "../components/Button/Button";
import WaitlistModal from "../components/WaitlistModal/WaitlistModal";

export default function ItemDetail(props, { item }) {
  const [visible, setVisible] = useState(false);
  const [category, setCategory] = useState("");
  const [filterPath, setFilterPath] = useState("");

  const apiFilterPath = "&[filters][type][$eq]=";
  const id = useParams().id;

  const { product, loading, error } = useFetch(`/products/${id}?populate=*`);
  // console.log(product);

  let imageIndex = 0;
  const inStock = product?.attributes?.inStock;

  const cycleImages = (e) => {
    // move to the next url in productImages array
    imageIndex += 1;

    //check if the next image exists, if not reset index to 0
    if (!product?.attributes?.images?.data[imageIndex]?.attributes?.url) {
      // console.log(`Product only has ${imageIndex} images`);
      imageIndex = 0;
    }

    //finally, set the new image
    e.target.setAttribute(
      "src",
      process.env.REACT_APP_UPLOAD_URL +
        product?.attributes?.images?.data[imageIndex]?.attributes?.url
    );
  };

  return (
    <div className='item-detail-page-outer-wrapper'>
      <ShopHeader
        filterProducts={(category) => {
          if (category === "all") {
            // empty string shows all products
            setCategory("");
            setFilterPath("");
          } else {
            // show only the passed in category string
            setCategory(category);
            // update the url with filter parameters for the API call
            setFilterPath(apiFilterPath);
          }
        }}
      />

      {loading ? (
        "Loading..."
      ) : (
        <div className='item-detail-page-inner-wrapper'>
          <div className='item-detail-left-wrapper'>
            {/* On click image should cycle */}
            <img
              className={`product ${inStock ? "" : "out-of-stock"}`}
              src={
                process.env.REACT_APP_UPLOAD_URL +
                product?.attributes?.images?.data[0]?.attributes?.url
              }
              alt={product?.attributes?.alt}
              onClick={(e) => {
                cycleImages(e);
              }}
            />
            {/* utility class 'grey' to color selected box */}
            <div className='cycle-box-wrapper'>
              <div className='cycle-box cb-1 grey'></div>
              <div className='cycle-box cb-2'></div>
              <div className='cycle-box cb-3'></div>
            </div>
          </div>
          <div className='item-detail-right-wrapper'>
            {/* //^ itemdetail page now has :id routes, so each product has its own link as noted by its id. */}
            {/* // dynamically get name, price, description */}
            <h1 className='product-name'>{product?.attributes?.title}</h1>

            <h1 className='price'>{`$${product?.attributes?.price} USD`}</h1>

            <p className='description'>{product?.attributes?.description}</p>

            <ButtonFilter />
            <Button
              // product?.attributes?.inStock
              className={`btn waitlist ${inStock ? "grey" : "out-of-stock"}`}
              title={inStock ? "Add to cart" : "Out of stock"}
              onClick={() => {
                if (inStock) {
                  setVisible(!visible);
                } else {
                  // alert("Item is currently out of stock");
                  return null;
                }
                // console.log("Add to waitlist btn pressed");
              }}
            />
          </div>
        </div>
      )}
      <WaitlistModal
        //^ modal position is styled in ItemDetail.scss */
        className={`${visible ? "gray-out" : "hidden"} waitlist-modal-position`}
        header='My Cart'
        quantity={`(${0})`}
        name='Work Shirt - White'
        size='L'
        price='375'
        btnOnClick={() => {
          //^onCLick event for 'Back to shop btn'
          setVisible(!visible);
        }}
      />
    </div>
  );
}
