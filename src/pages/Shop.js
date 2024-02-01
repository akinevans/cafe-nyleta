import React from "react";
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
  const sortPath = "&sort=displayOrder:asc";
  //^ &sort=id:asc allows the shop page to sort by id, price, displayOrder, name or any other property in the strapi content type. asc = ascending, desc = descending

  const { product, loading } = useFetch(`/products?populate=*
    ${props.filter ? apiFilterPath + props.filter : ""}${sortPath}`);

  console.log("product  " + product);

  return (
    <div className='shop-page-wrapper'>
      <ShopHeader />
      <div className='shop-products-wrapper'>
        {loading
          ? "Loading..."
          : product.map((objData) => (
              <Link
                className='item-card-link'
                to={`/itemdetail/${objData.id}`}
                key={objData.id}
              >
                <ItemCard item={objData} />
              </Link>
            ))}
      </div>
    </div>
  );
}
