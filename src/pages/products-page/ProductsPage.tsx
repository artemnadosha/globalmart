import { FC } from "react";
import { ProductList } from "../../component/product";
import { Content } from "../../UI";
import { useLocation, useParams } from "react-router-dom";
import {
  useGetProductsTotalQuery,
  useGetProductsQuery,
} from "../../store/api/products.api";

const ProductsPage: FC = () => {
  const params = useParams<{ categories: string }>();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const page = Number(searchParams.get("page"));

  const { data: totalProduct } = useGetProductsTotalQuery(
    params.categories === "all" ? "" : params.categories || ""
  );
  const { data, error, isLoading } = useGetProductsQuery({
    category: params.categories === "all" ? "" : params.categories || "",
    page,
  });

  return (
    <>
      {!!error && <div>test</div>}
      {data && totalProduct && (
        <ProductList
          products={data}
          totalProduct={totalProduct}
          loading={isLoading}
        />
      )}
    </>
  );
};

export default ProductsPage;
