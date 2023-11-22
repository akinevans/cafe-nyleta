import React, { useState } from "react";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";
import "../pages/page_styling/Shop/Shop.css";
import ShopHeader from "../components/ShopHeader/ShopHeader";
import ItemCard from "../components/ItemCard/ItemCard";

//TODO: look into key prop error

export default function Shop(props) {
  // category and filterPath as an empty string returns all products
  // to display all products just remove apiFilterPath
  // const [category, setCategory] = useState("");
  // const [filterPath, setFilterPath] = useState("");
  const apiFilterPath = "&[filters][type][$eq]=";

  const { product, loading } = useFetch(
    // First ternary operator: if a filter prop is supplied in an instance of the Shop component, concatenate the apiFilterPath string to the api fetch path. Else do nothing. (An empty string is used because 'null' breaks the operation)

    // Second ternary operator: if a filter prop is supplied in an instance of the Shop component, render products of that filter category, else, render all products. Note - providing an empty string returns all products from the API
    `/products?populate=*
    ${props.filter ? apiFilterPath : ""}${props.filter ? props.filter : ""}`
  );
  // console.log("product  " + product);

  return (
    <div className='shop-page-wrapper'>
      <ShopHeader
      // Function that filters store products by category. It works by updating the url in the useFetch hook via setState calls that pass in strings from the ShopHeader Component.
      // filterProducts={(category) => {
      //   if (category === "all") {
      //     // empty string shows all products
      //     setCategory("");
      //     setFilterPath("");
      //   } else {
      //     // show only the passed in category string
      //     setCategory(category);
      //     // update the url with filter parameters for the API call
      //     setFilterPath(apiFilterPath);
      //   }
      // }}
      />
      <div className='shop-products-wrapper'>
        {/*//& Fetch and map over items from Strapi API here  */}
        {/* //! This can be a custom hook */}
        {loading
          ? "Loading..."
          : product.map((objData) => (
              <Link className='item-card-link' to={`/itemdetail/${objData.id}`}>
                <ItemCard
                  //^ must set item = data
                  item={objData}
                  // every instance of the ItemCard component that is rendered will need its own key prop
                  key={objData.id}
                />
              </Link>
            ))}
      </div>
    </div>
  );
}
