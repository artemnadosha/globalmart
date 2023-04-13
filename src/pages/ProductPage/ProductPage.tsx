import { FC } from "react";
import { useLocation } from "react-router-dom";
import ProductInfo from "./ProductInfo/ProductInfo";
import { useAppSelector } from "../../store/store";

const ProductPage: FC = () => {
  const products = useAppSelector(
    (state) => state.rootReducer.product.products
  );
  const { pathname } = useLocation();

  const id = pathname.split("/");

  const product = products?.find(
    (product) => product.id === +id[id.length - 1]
  );

  return <>{!!product && <ProductInfo product={product} />}</>;
};

export default ProductPage;
