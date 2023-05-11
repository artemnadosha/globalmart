import { FC } from "react";
import { useLocation } from "react-router-dom";
import { useGetProductByIdQuery } from "../../store/api/products.api";
import ProductInfo from "./product-info/ProductInfo";
import { Result, Spin } from "antd";
import { Button } from "../../UI";
import { ROUTES } from "../../utils/const";

const ProductInfoPage: FC = () => {
  const { pathname } = useLocation();
  const id = pathname.split("/");
  const { data, isLoading, isError } = useGetProductByIdQuery(
    id[id.length - 1]
  );

  return (
    <>
      {isError && (
        <Result
          style={{ width: 400, margin: "0 auto" }}
          status="404"
          title="404"
          subTitle="Sorry, the page you visited does not exist."
          extra={
            <Button type="primary" href={ROUTES.HOME}>
              Back Home
            </Button>
          }
        />
      )}
      {isLoading ? (
        <Spin size="large" style={{ margin: "0 auto", width: "100% " }} />
      ) : (
        !!data && <ProductInfo product={data} />
      )}
    </>
  );
};

export default ProductInfoPage;
