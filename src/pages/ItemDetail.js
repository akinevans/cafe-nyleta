import React from "react";
import "../pages/page_styling/ItemDetail/ItemDetail.css";
import ShopHeader from "../components/ShopHeader/ShopHeader";
import ButtonFilter from "../components/ButtonFilter/ButtonFilter";
import Button from "../components/Button/Button";

// image imports
import shirt from "../assets/images/shop/workshirt_white_02.jpg";

export default function ItemDetail(props) {
  return (
    <div className='item-detail-page-outer-wrapper'>
      <ShopHeader />
      <div className='item-detail-page-inner-wrapper'>
        <div className='item-detail-left-wrapper'>
          {/* On click image should cycle */}
          <img className='product' src={shirt} alt='' />
          {/* utility class 'grey' to color selected box */}
          <div className='cycle-box-wrapper'>
            <div className='cycle-box cb-1 grey'></div>
            <div className='cycle-box cb-2'></div>
            <div className='cycle-box cb-3'></div>
          </div>
        </div>
        <div className='item-detail-right-wrapper'>
          <h1 className='product-name'>Work Shirt - White</h1>
          <h1 className='price'>$375 USD</h1>
          <p className='description'>
            Made from high-quality, breathable materials, this <br />
            classic and timeless shirt is built to withstand the <br />
            rigorous demands of a bustling cafe environment. Its <br />
            durability and classic look make it the perfect choice <br />
            for baristas, servers, or cafe owners.
          </p>
          <ButtonFilter />
          <Button className='btn grey waitlist' title='Add to Waitlist' />
        </div>
      </div>
    </div>
  );
}
