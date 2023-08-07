import React from "react";
import { useState } from "react";
import useFetch from "../hooks/useFetch";
import "../pages/page_styling/ItemDetail/ItemDetail.css";
import ShopHeader from "../components/ShopHeader/ShopHeader";
import ButtonFilter from "../components/ButtonFilter/ButtonFilter";
import Button from "../components/Button/Button";
import WaitlistModal from "../components/WaitlistModal/WaitlistModal";

// image imports
import shirt from "../assets/images/shop/workshirt_white_02.jpg";

export default function ItemDetail(props) {
  const [visible, setVisible] = useState(false);
  const [category, setCategory] = useState("");
  const [filterPath, setFilterPath] = useState("");
  const apiFilterPath = "&[filters][type][$eq]=";

  const { product, loading } = useFetch(
    `/products?populate=*${filterPath}${category}`
  );

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
      <div className='item-detail-page-inner-wrapper'>
        <div className='item-detail-left-wrapper'>
          {/* On click image should cycle */}
          <img
            className={`product ${visible ? "gray-out" : ""}`}
            //! dynamically get image and info
            src={shirt}
            alt=''
          />
          {/* utility class 'grey' to color selected box */}
          <div className='cycle-box-wrapper'>
            <div className='cycle-box cb-1 grey'></div>
            <div className='cycle-box cb-2'></div>
            <div className='cycle-box cb-3'></div>
          </div>
        </div>
        <div className='item-detail-right-wrapper'>
          {/* //TODO: itemdetail page now has :id routes, so each product has its own link as noted by its id. */}
          {/* //! dynamically get name, price, description */}
          <h1 className='product-name'>{"PLACEHOLDER"}</h1>
          <h1 className='price'>$375 USD</h1>
          <p className='description'>
            Made from high-quality, breathable materials, this <br />
            classic and timeless shirt is built to withstand the <br />
            rigorous demands of a bustling cafe environment. Its <br />
            durability and classic look make it the perfect choice <br />
            for baristas, servers, or cafe owners.
          </p>
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
      {/* //^ modal position is styled in ItemDetail.scss */}
      <WaitlistModal
        //
        className={`${visible ? "gray-out" : "hidden"} waitlist-modal-position`}
        header='My Cart'
        quantity={`(${0})`}
        name='Work Shirt - White'
        size='L'
        price='375'
        //^onCLick event for 'Back to shop btn'
        btnOnClick={() => {
          setVisible(!visible);
        }}
      />
    </div>
  );
}
