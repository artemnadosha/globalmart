import { useAppDispatch, useAppSelector } from "../store/store";
import { TypeProduct } from "../types/TypeProduct";
import { addItemCart, removeItemCart } from "../store/slice";
import { changeQuantityItemProduct } from "../store/slice/cartSlice/cartSlice";

interface useCartReturnType {
  cartItems: TypeProduct[];
  quantityCart: number;
  addProductCart: (product: TypeProduct) => void;
  removeProductCart: (id: number) => void;
  changeQuantityItemProducts: (id: number, quantity: number) => void;
}

const useCartReducer = (): useCartReturnType => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.rootReducer.cart.cart);
  const quantityCart = useAppSelector(
    (state) => state.rootReducer.cart.quantityCart
  );

  const addProductCart = (product: TypeProduct) =>
    dispatch(addItemCart(product));
  const removeProductCart = (id: number) => dispatch(removeItemCart(id));

  const changeQuantityItemProducts = (id: number, quantity: number) =>
    dispatch(
      changeQuantityItemProduct({
        id,
        quantity,
      })
    );

  return {
    cartItems,
    quantityCart,
    addProductCart,
    removeProductCart,
    changeQuantityItemProducts,
  };
};

export default useCartReducer;
