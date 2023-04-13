import { useAppDispatch, useAppSelector } from "../store/store";
import { TypeProduct } from "../types/TypeProduct";
import { fetchProduct } from "../store/slice";
import { useCallback } from "react";

interface useProductReturnType {
  productItems: TypeProduct[];
  totalProduct: number;
  skipProduct: number;
  limitProduct: number;
  productLoading: boolean;
  productStatus: "pending" | "fulfilled" | "rejected" | null;
  productError: string | null;
  fetchProducts: (category: string, skip?: number) => void;
}

const useProductReducer = (): useProductReturnType => {
  const dispatch = useAppDispatch();

  const productItems = useAppSelector(
    (state) => state.rootReducer.product.products
  );

  const totalProduct = useAppSelector(
    (state) => state.rootReducer.product.total
  );

  const skipProduct = useAppSelector((state) => state.rootReducer.product.skip);
  const limitProduct = useAppSelector(
    (state) => state.rootReducer.product.limit
  );
  const productLoading = useAppSelector(
    (state) => state.rootReducer.product.loading
  );
  const productStatus = useAppSelector(
    (state) => state.rootReducer.product.status
  );
  const productError = useAppSelector(
    (state) => state.rootReducer.product.error
  );

  const fetchProducts = useCallback(
    (category: string, skip?: number): void => {
      dispatch(fetchProduct({ skip: skip, category: category }));
    },
    [dispatch]
  );

  return {
    productItems,
    totalProduct,
    skipProduct,
    limitProduct,
    productError,
    productLoading,
    productStatus,
    fetchProducts,
  };
};

export default useProductReducer;
