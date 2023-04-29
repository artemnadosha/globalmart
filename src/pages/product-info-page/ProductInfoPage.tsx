import { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import { useGetProductByIdQuery } from "../../store/api/products.api";
import ProductInfo from "./product-info/ProductInfo";
import { Result } from "antd";
import { ROUTES } from "../../utils/const";

const ProductInfoPage: FC = () => {
  // const products = useAppSelector((state) => state.product.products);
  const { pathname } = useLocation();

  const id = pathname.split("/");

  const { data } = useGetProductByIdQuery(id[id.length - 1]);

  // const product = products?.find(
  //   (product) => product.id === +id[id.length - 1]
  // );

  return (
    <>
      {!!data ? (
        <ProductInfo product={data} />
      ) : (
        <Result
          status="404"
          title="404"
          subTitle="Sorry, the page you visited does not exist."
          extra={<Link to={ROUTES.HOME}>Go to Home</Link>}
        />
      )}
    </>
  );
};

export default ProductInfoPage;
