import { FC } from "react";
import { ProductList } from "../../component/product";
import { useLocation, useParams } from "react-router-dom";
import { useGetProductsQuery } from "../../store/api/products.api";
import { Spin } from "antd";

const ProductsPage: FC = () => {
  const params = useParams<{ categories: string }>();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const page = Number(searchParams.get("page")) || 1;
  const subCategory = searchParams.get("category") || "";
  const brand = searchParams.get("brand") || "";
  const titleSearch = searchParams.get("search") || "";

  const { data, isLoading } = useGetProductsQuery({
    category: params.categories || "",
    page,
    subCategory,
    brand,
    titleSearch,
  });

  return (
    <>
      {isLoading ? (
        <Spin size="large" style={{ margin: "0 auto", width: "100% " }} />
      ) : (
        data && (
          <ProductList
            products={data.products}
            totalProduct={data.totalProducts}
            loading={isLoading}
          />
        )
      )}
    </>
  );
};

export default ProductsPage;
