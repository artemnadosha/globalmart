import { FC } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Pagination } from "../../../UI";
import { ProductCard, ProductFilter } from "../index";
import { Col, List, Row } from "antd";
import { TypeProduct } from "../../../types/TypeProduct";
import s from "./ProductList.module.scss";

import { Input, Space } from "antd";

const { Search } = Input;

interface ProductListProps {
  products: TypeProduct[];
  totalProduct: number;
  loading?: boolean;
  onClick?: (page: number) => void;
}

const ProductList: FC<ProductListProps> = ({
  products,
  totalProduct,
  loading,
  onClick,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const page = searchParams.get("page");
  const handlePagination = (page: number) => {
    navigate(`${location.pathname}?page=${page}`);
    onClick && onClick(page);
  };

  const onSearch = (value: string) => console.log(value);
  return (
    <div className={s.wrapper}>
      <Row gutter={24} style={{ height: "100%" }}>
        <Col span={4} style={{ height: "100%" }}>
          <ProductFilter />
        </Col>
        <Col span={20}>
          <div className={s.searchWrapper}>
            <Search
              placeholder="input search text"
              onSearch={onSearch}
              enterButton
            />
          </div>
          <List
            loading={loading}
            grid={{
              xs: 1,
              sm: 1,
              md: 2,
              lg: 3,
              xl: 3,
              xxl: 4,
            }}
            pagination={{
              current: Number(page),
              onChange: handlePagination,
              pageSize: 12,
              total: totalProduct,
              showQuickJumper: true,
              showSizeChanger: false,
            }}
            dataSource={products}
            renderItem={(product) => (
              <List.Item style={{ margin: 10 }}>
                <ProductCard product={product} />
              </List.Item>
            )}
          />
        </Col>
      </Row>
      {/*<Pagination*/}
      {/*  total={totalProduct}*/}
      {/*  current={Number(page)}*/}
      {/*  onClick={handlePagination}*/}
      {/*/>*/}
    </div>
  );
};

export default ProductList;
