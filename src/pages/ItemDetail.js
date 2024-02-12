import React from "react";
import { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";

// component imports
import ShopHeader from "../components/ShopHeader/ShopHeader";
import ButtonFilter from "../components/ButtonFilter/ButtonFilter";
import Button from "../components/Button/Button";
import AddToCartConfirmationModal from "../components/Modals/AddToCartConfirmationModal/AddToCartConfirmationModal";
import ShoppingCartLimitModal from "../components/Modals/ShoppingCartLimitModal/ShoppingCartLimitModal";
import "../pages/page_styling/ItemDetail/ItemDetail.css";

//utility imports
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../src/redux/cartReducer";
import {
  getProductQuantity,
  canBeAddedToCart,
  getNumOfImages,
  cycleImages,
} from "../utils/shopping";

export default function ItemDetail() {
  const [addModalVisible, setAddModalVisible] = useState(false);
  const [limitModalVisible, setLimitModalVisible] = useState(false);
  const [category, setCategory] = useState("");
  const [filterPath, setFilterPath] = useState("");
  const [productSize, setProductSize] = useState("M");
  const [itemQuantity, setItemQuantity] = useState(1);
  const [currentCycleBox, setCurrentCycleBox] = useState(0);

  const dispatch = useDispatch();
  const apiFilterPath = "&[filters][type][$eq]=";
  const id = useParams().id;
  const { product, loading } = useFetch(`/products/${id}?populate=*`);
  const products = useSelector((state) => state.cart.products);
  // console.log(product);
  // console.log(products);
  // console.log(product.id);
  // console.log(product.attributes?.size);

  const productName = product?.attributes?.title,
    productColor = product?.attributes?.color,
    productDescription = product?.attributes?.description,
    productPrice = product?.attributes?.price,
    inStock = product?.attributes?.inStock,
    altDescription = product?.attributes?.alt,
    isOneSize = product?.attributes?.size === "ONESIZE";

  const maxQuantity = 5;
  getNumOfImages(product);

  // scroll to the top of the page on render
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='item-detail-page-outer-wrapper'>
      <ShopHeader
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

      {loading ? (
        "Loading..."
      ) : (
        <div className='item-detail-page-inner-wrapper'>
          <div className='item-detail-left-wrapper'>
            <div className='image-and-cycle-wrapper'>
              <img
                className={`product ${inStock ? "" : "out-of-stock"}`}
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  product?.attributes?.images?.data[currentCycleBox]?.attributes
                    ?.url
                }
                alt={altDescription}
                onClick={(e) => {
                  cycleImages(e, product, currentCycleBox, setCurrentCycleBox);
                }}
              />
              <div className='cycle-box-wrapper'>
                {/* use utility class 'active' to color selected box */}
                {/* // i represents each iteration of map function*/}
                {product?.attributes?.images?.data.map((element, i) => (
                  <>
                    {/* <p>{i}</p> */}
                    <div
                      className={`cycle-box ${
                        currentCycleBox === i ? "active" : ""
                      }`}
                    ></div>
                  </>
                ))}
              </div>
            </div>
          </div>
          <div className='item-detail-right-wrapper'>
            {/* //^ itemdetail page now has :id routes, so each product has its own link as noted by its id. */}
            {/* // dynamically get name, price, description */}
            <h1 className='product-name'>{`${productName} ${
              productColor ? "- " + productColor : ""
            }`}</h1>

            <h1 className='price'>{`$${productPrice} USD`}</h1>

            <p className='description'>{productDescription}</p>
            {/* //* Size Selector */}
            <ButtonFilter
              className='item-detail-filter-btn'
              isOneSize={isOneSize}
              sizeOnClick={(size) => {
                setProductSize(size);
                // console.log(productSize);
              }}
            />
            <Button
              className={`btn waitlist item-detail-btn ${
                inStock ? "grey" : "out-of-stock"
              }`}
              title={inStock ? "Add to Cart" : "Out of stock"}
              onClick={() => {
                if (inStock) {
                  if (canBeAddedToCart) {
                    setAddModalVisible(true);
                    dispatch(
                      addToCart({
                        //redux payload -> 8 keys
                        id: product.id,
                        title: product.attributes.title,
                        description: product.attributes.description,
                        price: product.attributes.price,
                        size: productSize,
                        color: product.attributes.color,
                        image: product.attributes.images.data[0].attributes.url,
                        itemQuantity,
                      })
                    );
                    // Only open AddToCartConfirmationModal if the products quantity in the cart is below 5
                    if (
                      getProductQuantity(products, product.id, productSize) >=
                      maxQuantity
                    ) {
                      setAddModalVisible(false);
                      setLimitModalVisible(true);
                      //& Close waitlist modal after X amount of time
                      //& Close waitlist modal after X amount of time
                      //& Close waitlist modal after X amount of time
                    }
                  } else {
                    // alert("error in itemDetail");
                    // alert("Limit 5 per customer, per size");
                    return null;
                  }
                } else {
                  // alert("Item is currently out of stock");
                  return null;
                }
                // console.log("Add to waitlist btn pressed");
              }}
            />
          </div>
        </div>
      )}
      <AddToCartConfirmationModal
        //^ modal position is styled in ItemDetail.scss */
        className={`${
          addModalVisible ? "gray-out" : "hidden"
        } waitlist-modal-position`}
        src={
          process.env.REACT_APP_UPLOAD_URL +
          product?.attributes?.images?.data[0]?.attributes?.url
        }
        alt={altDescription}
        name={productName}
        size={isOneSize ? "One Size" : productSize}
        price={productPrice}
        color={productColor}
        closeBtnOnClick={() => {
          setAddModalVisible(false);
        }}
      />
      <ShoppingCartLimitModal
        //^ modal position is styled in ItemDetail.scss */
        className={`${
          limitModalVisible ? "gray-out" : "hidden"
        } limit-modal-position`}
        closeBtnOnClick={() => {
          setLimitModalVisible(false);
        }}
      />
    </div>
  );
}
