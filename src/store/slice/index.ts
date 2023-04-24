export {
  default as cartSlice,
  removeItemCart,
  removeAllItemCart,
  addItemCart,
} from "./cart-slice/cart.slice";
export {
  default as modalSlice,
  responseModal,
  toggleIsActive,
} from "./modal-slice/modal.slice";
export {
  default as favoriteSlice,
  addItemFavorite,
  removeItemFavorite,
} from "./favorite-slice/favorite.slice";
export {
  default as checkoutSlice,
  setUserInfo,
  setShippingMethod,
  setPayout,
  setOrderInfo,
  setProduct,
} from "./checkout-slice/checkout.slice";
