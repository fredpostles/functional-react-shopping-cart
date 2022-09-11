export const processShoppingCart = (products, shoppingCartItems) => {
  //holds total cart value
  let cartTotal = 0;

  //loop over the cart items
  shoppingCartItems.forEach((item) => {
    //for each cart item, find the product data and add it to the cart item
    const product = products.find((product) => product.id === item.id);
    item.details = product;

    //add to the total
    cartTotal += item.quantity * item.details.price;
  });

  return { shoppingCartItems, cartTotal };
};
