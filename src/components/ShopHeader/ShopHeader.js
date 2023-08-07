import React from "react";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import "./ShopHeader.css";

export default function ShopHeader(props) {
  // const catId = parseInt(useParams().id);

  // const { products, loading, error } = useFetch(
  //   `/categories?[filters][categories][id][$eq]${catId}`
  // );
  // console.log(products);

  return (
    <div className='shop-header-outer-wrapper'>
      <div className='shop-header-inner-wrapper'>
        <ul className='shop-header-list'>
          <li>
            {/* filter on click */}
            <button onClick={props.filterAll} className='filter-btn'>
              All
            </button>
          </li>
          <li>
            <button onClick={props.filterApparel} className='filter-btn'>
              Apparel
            </button>
          </li>
          <li>
            <button onClick={props.filterAccessories} className='filter-btn'>
              Accessories
            </button>
          </li>
          <li>
            <button onClick={props.filterHomeGoods} className='filter-btn'>
              Home Goods
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
