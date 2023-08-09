import React from "react";
// import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./ShopHeader.css";

export default function ShopHeader(props) {
  return (
    <div className='shop-header-outer-wrapper'>
      <div className='shop-header-inner-wrapper'>
        <ul className='shop-header-list'>
          <li>
            <Link to='/shop' className='filter-link'>
              All
            </Link>
          </li>
          <li>
            <Link to='/shop/apparel' className='filter-link'>
              Apparel
            </Link>
          </li>
          <li>
            <Link to='/shop/accessories' className='filter-link'>
              Accessories
            </Link>
          </li>
          <li>
            <Link to='/shop/homegoods' className='filter-link'>
              Home Goods
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
