import { useAppDispatch, useAppSelector } from "../store/store";
import { fetchCategories } from "../store/slice";
import { useCallback } from "react";

interface useCategoriesReturnType {
  productCategories: string[];
  fetchProductsCategories: () => void;
}

const useCategoriesReducer = (): useCategoriesReturnType => {
  const dispatch = useAppDispatch();

  const productCategories = useAppSelector(
    (state) => state.rootReducer.productCategories.categories
  );

  const fetchProductsCategories = useCallback(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return {
    productCategories,
    fetchProductsCategories,
  };
};

export default useCategoriesReducer;
