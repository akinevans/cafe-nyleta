import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";
import "../pages/page_styling/Shop/Shop.css";
import ShopHeader from "../components/ShopHeader/ShopHeader";
import ItemCard from "../components/ItemCard/ItemCard";

export default function ShopHomeGoods() {
  // category and filterPath as an empty string returns all products
  // to display all products just remove apiFilterPath
  //   const [category, setCategory] = useState("");
  //   const [filterPath, setFilterPath] = useState("");
  //   const apiFilterPath = "&[filters][type][$eq]=";

  const { product, loading } = useFetch(
    //& path for accessories
    "/products?populate=*&[filters][type][$eq]=home-goods"
  );
  console.log("product  " + product);

  return (
    <div className='shop-page-wrapper'>
      <ShopHeader />

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
