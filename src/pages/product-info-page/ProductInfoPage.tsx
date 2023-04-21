import { FC } from "react";
import { useLocation } from "react-router-dom";
import { useGetProductByIdQuery } from "../../store/api/products.api";
import ProductInfo from "./product-info/ProductInfo";

const ProductInfoPage: FC = () => {
  // const products = useAppSelector((state) => state.product.products);
  const { pathname } = useLocation();

  const id = pathname.split("/");

  const { data } = useGetProductByIdQuery(id[id.length - 1]);

  // const product = products?.find(
  //   (product) => product.id === +id[id.length - 1]
  // );

  return <>{!!data && <ProductInfo product={data} />}</>;
};

export default ProductInfoPage;
