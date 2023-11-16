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
  console.log(product);

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
              className={`product ${
                product?.attributes?.inStock ? "" : "out-of-stock"
              }`}
              src={
                process.env.REACT_APP_UPLOAD_URL +
                product?.attributes?.image?.data?.attributes?.url
              }
              alt={product?.attributes?.title}
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
              className='btn grey waitlist'
              title='Add to cart'
              onClick={() => {
                setVisible(!visible);
                console.log("Add to waitlist btn pressed");
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
