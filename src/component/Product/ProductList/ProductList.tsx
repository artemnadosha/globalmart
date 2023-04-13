import { FC } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Pagination } from "../../../UI";
import { ProductCard } from "../index";
import { List } from "antd";
import { TypeProduct } from "../../../types/TypeProduct";
import s from "./ProductList.module.scss";

interface ProductListProps {
  products: TypeProduct[];
  totalProduct: number;
  loading?: boolean;
}

const ProductList: FC<ProductListProps> = ({
  products,
  totalProduct,
  loading,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const page = searchParams.get("page");
  const handlePagination = (page: number) => {
    navigate(`${location.pathname}?page=${page}`);
  };

  return (
    <div className={s.wrapper}>
      <List
        className={s.list}
        loading={loading}
        grid={{
          xs: 1,
          sm: 1,
          md: 2,
          lg: 3,
          xl: 4,
          xxl: 6,
        }}
        dataSource={products}
        renderItem={(product) => (
          <List.Item>
            <ProductCard product={product} />
          </List.Item>
        )}
      />
      <Pagination
        total={totalProduct}
        current={Number(page)}
        onClick={handlePagination}
      />
    </div>
  );
};

export default ProductList;
