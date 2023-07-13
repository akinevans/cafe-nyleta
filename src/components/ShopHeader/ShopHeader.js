import React from "react";
import "./ShopHeader.css";

export default function ShopHeader() {
  return (
    <div className='shop-header-outer-wrapper'>
      <div className='shop-header-inner-wrapper'>
        <ul className='shop-header-list'>
          <li>
            {/* filter on click */}
            <button className='filter-btn'>All</button>
          </li>
          <li>
            <button className='filter-btn'>Apparel</button>
          </li>
          <li>
            <button className='filter-btn'>Accessories</button>
          </li>
          <li>
            <button className='filter-btn'>Home Goods</button>
          </li>
        </ul>
      </div>
    </div>
  );
}
