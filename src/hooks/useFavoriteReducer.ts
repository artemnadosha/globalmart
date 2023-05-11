import { useAppDispatch, useAppSelector } from "../store/store";
import { addItemFavorite, removeItemFavorite } from "../store/slice";
import { TypeProduct } from "../types/TypeProduct";
import { useCallback, useMemo } from "react";

interface useFavoriteReturnType {
  favoriteItems: TypeProduct[];
  quantityFavorite: number;
  addProductFavorite: (product: TypeProduct) => void;
  removeProductFavorite: (itemId: number) => void;
  findProductFavorite: boolean;
}

const useFavoriteReducer = (id?: number): useFavoriteReturnType => {
  const dispatch = useAppDispatch();
  const favoriteItems = useAppSelector((state) => state.favorite.favorite);
  const quantityFavorite = useAppSelector(
    (state) => state.favorite.quantityFavorite
  );

  const addProductFavorite = useCallback(
    (product: TypeProduct) => {
      dispatch(addItemFavorite(product));
    },
    [dispatch]
  );

  const removeProductFavorite = useCallback(
    (itemId: number) => {
      dispatch(removeItemFavorite(itemId));
    },
    [dispatch]
  );

  const findProductFavorite = useMemo(
    () => !!favoriteItems.find((item) => item.id === id),
    [favoriteItems, id]
  );

  return {
    favoriteItems,
    quantityFavorite,
    addProductFavorite,
    removeProductFavorite,
    findProductFavorite,
  };
};

export default useFavoriteReducer;
