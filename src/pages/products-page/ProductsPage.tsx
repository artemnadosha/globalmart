import { FC } from "react";
import { ProductList } from "../../component/product";
import { Link, useLocation, useParams } from "react-router-dom";
import { useGetProductsQuery } from "../../store/api/products.api";
import { Result, Spin } from "antd";
import { ROUTES } from "../../utils/const";

const ProductsPage: FC = () => {
  const params = useParams<{ categories: string }>();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const page = Number(searchParams.get("page")) || 1;
  const subCategory = searchParams.get("category") || "";
  const brand = searchParams.get("brand") || "";

  const { data, isLoading } = useGetProductsQuery({
    category: params.categories || "",
    page,
    subCategory,
    brand,
  });

  return (
    <>
      {isLoading ? (
        <Spin size="large" style={{ margin: "0 auto", width: "100% " }} />
      ) : data && !!data.products.length ? (
        <ProductList
          products={data.products}
          totalProduct={data.totalProducts}
          loading={isLoading}
        />
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

export default ProductsPage;
