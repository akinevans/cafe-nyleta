// Utility functions for all shopping logic processes

export const updateProductQuantity = (operation, currentQuantity) => {
  const maxQuantityPerProduct = 5;
  const minQuantityPerProduct = 1;
  let updatedQuantity;

  if (operation === "increment" && currentQuantity < maxQuantityPerProduct) {
    updatedQuantity = currentQuantity + 1;
    return updatedQuantity;
  } else if (
    operation === "decrement" &&
    currentQuantity > minQuantityPerProduct
  ) {
    updatedQuantity = currentQuantity - 1;
    return updatedQuantity;
  } else return;
};

//
//

//get correct product from cart by matching its id and size
export const getProductQuantity = (products, id, size) => {
  const foundProduct = products.find(
    (product) => product.id === id && product.size === size
  );

  //^ alerts for debugging
  // foundProduct
  //   ? alert("Match found!!")
  //   : alert("No match found, adding new item to cart");

  // if product is found return its quantity, else return null
  return foundProduct ? foundProduct.itemQuantity : null;
};

//
//

// This function serves 3 purposes. To get total quantity, total price, and individual quantity
export const getCartQuantityAndPrice = (products) => {
  let totalQuantity = 0;
  let totalPrice = 0;

  for (let i = 0; i < products.length; i++) {
    totalQuantity += products[i].itemQuantity;
    totalPrice += products[i].itemQuantity * products[i].price;
  }
  return [totalQuantity, totalPrice.toFixed(2)];
};

//
//

export const canBeAddedToCart = (products, product) => {
  const cartEmpty = products.length === 0;
  return (
    cartEmpty ||
    getProductQuantity(products, product.id, product.attributes?.size)
  );
};

//
//

export const getNumOfImages = (product) => {
  const numOfImages = [];
  for (let i = 0; i < product?.attributes?.images?.data.length; i++) {
    numOfImages.push(i);
  }
};

//
//

export const cycleImages = (
  e,
  product,
  currentCycleBox,
  setCurrentCycleBox
) => {
  const nextImage =
    product?.attributes?.images?.data[currentCycleBox + 1]?.attributes?.url;

  //check if the next image exists, if true increment, if false reset index to 0
  if (nextImage) {
    setCurrentCycleBox((prevCurrentCycleBox) => prevCurrentCycleBox + 1);
  } else {
    setCurrentCycleBox(0);
  }

  //finally, set the new image src
  e.target.setAttribute(
    "src",
    process.env.REACT_APP_UPLOAD_URL +
      product?.attributes?.images?.data[currentCycleBox]?.attributes?.url
  );
};

//
//
