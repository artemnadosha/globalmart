import { useAppDispatch, useAppSelector } from "../store/store";
import { TypeProduct } from "../types/TypeProduct";
import { addItemCart, removeAllItemCart, removeItemCart } from "../store/slice";
import { changeQuantityItemProduct } from "../store/slice/cart-slice/cart.slice";
import { useCallback } from "react";

interface useCartReturnType {
  cartItems: TypeProduct[];
  quantityCart: number;
  addProductCart: (product: TypeProduct) => void;
  removeProductCart: (id: number) => void;
  removeAllCart: () => void;
  changeQuantityItemProducts: (id: number, quantity: number) => void;
}

const useCartReducer = (): useCartReturnType => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.cart);
  const quantityCart = useAppSelector((state) => state.cart.quantityCart);

  const addProductCart = (product: TypeProduct) =>
    dispatch(addItemCart(product));

  const removeProductCart = useCallback(
    (id: number) => {
      dispatch(removeItemCart(id));
    },
    [dispatch]
  );

  const removeAllCart = useCallback(() => {
    dispatch(removeAllItemCart());
  }, [dispatch]);

  const changeQuantityItemProducts = useCallback(
    (id: number, quantity: number) =>
      dispatch(
        changeQuantityItemProduct({
          id,
          quantity,
        })
      ),
    [dispatch]
  );

  return {
    cartItems,
    quantityCart,
    addProductCart,
    removeAllCart,
    removeProductCart,
    changeQuantityItemProducts,
  };
};

export default useCartReducer;
