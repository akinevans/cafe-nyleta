import React, { useEffect, useState } from "react";
import axios from "axios";

import "../pages/page_styling/Shop/Shop.css";
import ShopHeader from "../components/ShopHeader/ShopHeader";
import ItemCard from "../components/ItemCard/ItemCard";
import { Link } from "react-router-dom";

export default function Shop({ category }) {
  const [products, setProducts] = useState([]);

  //& Code for fetching data from Strapi Backend with axios
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          process.env.REACT_APP_API_URL +
            `/products?populate=*&[filters][category][$eq]=${category}`,
          {
            headers: {
              Authorization: "bearer " + process.env.REACT_APP_API_TOKEN,
            },
          }
        );
        setProducts(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  // console.log(products);

  return (
    <div className='shop-page-wrapper'>
      <ShopHeader />

      <div className='shop-products-wrapper'>
        {/*//& Fetch items from Strapi API here  */}
        {products.map((data) => (
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
