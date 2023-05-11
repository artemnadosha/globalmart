import { useAppDispatch, useAppSelector } from "../store/store";
import { TypeProduct } from "../types/TypeProduct";
import { addItemCart, removeAllItemCart, removeItemCart } from "../store/slice";
import { changeQuantityItemProduct } from "../store/slice/cart-slice/cart.slice";
import { useCallback, useMemo } from "react";

interface useCartReturnType {
  cartItems: TypeProduct[];
  quantityCart: number;
  addProductCart: (product: TypeProduct) => void;
  removeProductCart: (itemId: number) => void;
  removeAllCart: () => void;
  changeQuantityItemProducts: (id: number, quantity: number) => void;
  findProductCart: boolean;
}

const useCartReducer = (id?: number): useCartReturnType => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.cart);
  const quantityCart = useAppSelector((state) => state.cart.quantityCart);

  const addProductCart = useCallback(
    (product: TypeProduct) => {
      dispatch(addItemCart(product));
    },
    [dispatch]
  );

  const removeProductCart = useCallback(
    (itemId: number) => {
      dispatch(removeItemCart(itemId));
    },
    [dispatch]
  );

  const removeAllCart = useCallback(() => {
    dispatch(removeAllItemCart());
  }, [dispatch]);

  const changeQuantityItemProducts = useCallback(
    (id: number, quantity: number) =>
      id &&
      dispatch(
        changeQuantityItemProduct({
          id,
          quantity,
        })
      ),
    [dispatch]
  );

  const findProductCart = useMemo(
    () => !!cartItems.find((item) => item.id === id),

    [cartItems, id]
  );

  return {
    cartItems,
    quantityCart,
    addProductCart,
    removeAllCart,
    removeProductCart,
    changeQuantityItemProducts,
    findProductCart,
  };
};

export default useCartReducer;
