import { useAppDispatch, useAppSelector } from "../store/store";
import { addItemFavorite, removeItemFavorite } from "../store/slice";
import { TypeProduct } from "../types/TypeProduct";

interface useFavoriteReturnType {
  favoriteItems: TypeProduct[];
  quantityFavorite: number;
  addProductFavorite: (product: TypeProduct) => void;
  removeProductFavorite: (id: number) => void;
}

const useFavoriteReducer = (): useFavoriteReturnType => {
  const dispatch = useAppDispatch();
  const favoriteItems = useAppSelector((state) => state.favorite.favorite);
  const quantityFavorite = useAppSelector(
    (state) => state.favorite.quantityFavorite
  );

  const addProductFavorite = (product: TypeProduct) =>
    dispatch(addItemFavorite(product));

  const removeProductFavorite = (id: number) =>
    dispatch(removeItemFavorite(id));

  return {
    favoriteItems,
    quantityFavorite,
    addProductFavorite,
    removeProductFavorite,
  };
};

export default useFavoriteReducer;
