import React, { useState } from "react";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";
import "../pages/page_styling/Shop/Shop.css";
import ShopHeader from "../components/ShopHeader/ShopHeader";
import ItemCard from "../components/ItemCard/ItemCard";

export default function Shop() {
  // category and filterPath as an empty string returns all products
  // to display all products just remove filter
  const [category, setCategory] = useState("");
  const [filterPath, setFilterPath] = useState("");
  const apiFilterPath = "&[filters][type][$eq]=";

  const { product, loading } = useFetch(
    `/products?populate=*${filterPath}${category}`
  );
  console.log("product  " + product);

  return (
    <div className='shop-page-wrapper'>
      <ShopHeader
        // Function that filters store products by category. It works by updating the url in the useFetch hook via setState calls that pass in strings from the ShopHeader Component.
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

      <div className='shop-products-wrapper'>
        {/*//& Fetch and map over items from Strapi API here  */}
        {loading
          ? "Loading..."
          : product.map((data) => (
              //! add a dynamic link tag that takes user to a ItemDetail page for each store item
              <Link className='item-card-link' to={`/itemdetail/${data.id}`}>
                <ItemCard
                  //^ must set item = item
                  item={data}
                  // every instance of the ItemCard component that is rendered will need its own key prop
                  key={data.id}
                  className=''
                  description={data?.attributes?.description}
                  src={data?.attributes?.image}
                  alt={data?.attributes?.description}
                  price={data?.attributes?.price}
                />
              </Link>
            ))}
      </div>
    </div>
  );
}
