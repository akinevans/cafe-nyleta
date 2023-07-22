import React from "react";
import "../pages/page_styling/Shop/Shop.css";
import ShopHeader from "../components/ShopHeader/ShopHeader";
import ItemCard from "../components/ItemCard/ItemCard";
import { Link } from "react-router-dom";

import work_shirt from "../assets/images/shop/workshirt_white_02.jpg";
import hat from "../assets/images/shop/hat_navy_01.jpg";
import crew from "../assets/images/shop/crewneck_sand_02.jpg";

export default function Shop() {
  return (
    <div className='shop-page-wrapper'>
      <ShopHeader />

      <div className='shop-products-wrapper'>
        {/* All item components rendered here */}
        {/* Temp link tag */}
        <Link to='/itemdetail'>
          <ItemCard
            //
            src={work_shirt}
            description='Work Shirt - White'
            price='375'
          />
        </Link>
        <ItemCard
          //
          src={work_shirt}
          description='Work Shirt - White'
          price='375'
        />
        <ItemCard
          //
          src={work_shirt}
          description='Work Shirt - White'
          price='375'
        />
        <ItemCard
          //
          src={work_shirt}
          description='Work Shirt - White'
          price='375'
        />
        <ItemCard
          //
          className='out-of-stock'
          src={hat}
          description='Work Shirt - White'
          price='375'
        />
        <ItemCard
          //
          className='out-of-stock'
          src={hat}
          description='Work Shirt - White'
          price='375'
        />
        <ItemCard
          //
          src={hat}
          description='Work Shirt - White'
          price='375'
        />
        <ItemCard
          //
          src={hat}
          description='Work Shirt - White'
          price='375'
        />
        <ItemCard
          //
          src={crew}
          description='Work Shirt - White'
          price='375'
        />
        <ItemCard
          //
          src={crew}
          description='Work Shirt - White'
          price='375'
        />
        <ItemCard
          //
          className='out-of-stock'
          src={crew}
          description='Work Shirt - White'
          price='375'
        />
        <ItemCard
          //
          className='out-of-stock'
          src={crew}
          description='Work Shirt - White'
          price='375'
        />
      </div>
      {/* shop components with data from Strapi CMS */}
    </div>
  );
}
