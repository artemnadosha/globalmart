import { FC, useMemo } from "react";
import { ProductList } from "../../component/Product";
import useProductReducer from "../../hooks/useProductReducer";
import { Content } from "../../UI";

const HomePage: FC = () => {
  const { productItems, totalProduct, productLoading, productError } =
    useProductReducer();
  const products = useMemo(() => productItems, [productItems]);

  return (
    <Content>
      {!!productError && <div>{productError}</div>}
      <ProductList
        products={products}
        totalProduct={totalProduct}
        loading={productLoading}
      />
    </Content>
  );
};

export default HomePage;
