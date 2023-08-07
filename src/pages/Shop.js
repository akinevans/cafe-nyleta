import React, { useState } from "react";
import useFetch from "../hooks/useFetch";

import "../pages/page_styling/Shop/Shop.css";
import ShopHeader from "../components/ShopHeader/ShopHeader";
import ItemCard from "../components/ItemCard/ItemCard";

export default function Shop() {
  // category and filterPath as an empty string returns all products
  const [category, setCategory] = useState("");
  const [filterPath, setFilterPath] = useState("");
  const apiFilterPath = "&[filters][type][$eq]=";

  //! to display all just remove filter

  const { product, loading } = useFetch(
    `/products?populate=*${filterPath}${category}`
  );
  // console.log(products);

  return (
    <div className='shop-page-wrapper'>
      {/* //! add prop to shop header to filter api call */}
      <ShopHeader
        // filter all
        filterAll={() => {
          setCategory("");
          setFilterPath("");
        }}
        // filter apparel
        filterApparel={() => {
          setCategory("apparel");
          setFilterPath(apiFilterPath);
        }}
        // filter accessories
        filterAccessories={() => {
          setCategory("accessories");
          setFilterPath(apiFilterPath);
        }}
        // filter home-goods
        filterHomeGoods={() => {
          setCategory("home-goods");
          setFilterPath(apiFilterPath);
        }}
      />

      <div className='shop-products-wrapper'>
        {/*//& Fetch items from Strapi API here  */}
        {loading
          ? "Loading..."
          : product.map((data) => (
              // add a dynamic link tag that takes user to a new page for each store item
              <ItemCard
                //^ must set item = item
                item={data}
                //^ every instance of the ItemCard component that is rendered will need its own key prop
                key={data.id}
                className=''
                description={data?.attributes?.description}
                src={data?.attributes?.image}
                alt={data?.attributes?.description}
                price={data?.attributes?.price}
              />
            ))}
      </div>
    </div>
  );
}
