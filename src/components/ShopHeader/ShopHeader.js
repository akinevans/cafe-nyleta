import React from "react";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import "./ShopHeader.css";

export default function ShopHeader(props) {
  return (
    <div className='shop-header-outer-wrapper'>
      <div className='shop-header-inner-wrapper'>
        <ul className='shop-header-list'>
          <li>
            {/* filter on click */}
            <button
              onClick={() => {
                props.filterProducts("all");
              }}
              className='filter-btn'
            >
              All
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                props.filterProducts("apparel");
              }}
              className='filter-btn'
            >
              Apparel
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                props.filterProducts("accessories");
              }}
              className='filter-btn'
            >
              Accessories
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                props.filterProducts("home-goods");
              }}
              className='filter-btn'
            >
              Home Goods
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
