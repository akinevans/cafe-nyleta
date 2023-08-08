import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./ShopHeader.css";

export default function ShopHeader(props) {
  return (
    <div className='shop-header-outer-wrapper'>
      <div className='shop-header-inner-wrapper'>
        <ul className='shop-header-list'>
          <li>
            <Link to='/shop'>
              {/* filter on click */}
              <button
                onClick={() => {
                  //! delete the filter function, its no longer necessary after making each product category its own page
                  // props.filterProducts("all");
                }}
                className='filter-btn'
              >
                All
              </button>
            </Link>
          </li>
          <li>
            <Link to='/shop/apparel'>
              {/* //! remove buttons and update styling */}
              <button className='filter-btn'>Apparel</button>
            </Link>
          </li>
          <li>
            <Link to='/shop/accessories'>
              <button
                onClick={() => {
                  // props.filterProducts("accessories");
                }}
                className='filter-btn'
              >
                Accessories
              </button>
            </Link>
          </li>
          <li>
            <Link to='/shop/homegoods'>
              <button
                onClick={() => {
                  // props.filterProducts("home-goods");
                }}
                className='filter-btn'
              >
                Home Goods
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
