import { FC, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductCard, ProductFilter } from "../index";
import { Col, List, Row, Segmented, Tag } from "antd";
import { TypeProduct } from "../../../types/TypeProduct";
import s from "./ProductList.module.scss";
import { AppstoreOutlined, BarsOutlined } from "@ant-design/icons";
import { useGetProductsInfoQuery } from "../../../store/api/products.api";
import { useFilterProducts } from "../../../hooks";
import { SegmentedValue } from "antd/es/segmented";
import { correctionName } from "../../../utils";

interface ProductListProps {
  products: TypeProduct[];
  totalProduct: number;
  loading?: boolean;
  onClick?: (page: number) => void;
  filter?: boolean;
}

const ProductList: FC<ProductListProps> = ({
  products,
  totalProduct,
  loading,
  onClick,
  filter,
}) => {
  const isFilter = useRef(filter || true);
  const { categories } = useParams();
  const { data } = useGetProductsInfoQuery();
  const {
    handleChangeBrand,
    handleChangeSubCategory,
    handleChangePage,
    subCategoryState,
    brandState,
    pageState,
  } = useFilterProducts();
  const [styleCard, setStyleCard] = useState<"column" | "row">("column");

  const handlePagination = (page: number) => {
    handleChangePage(page);
    onClick && onClick(page);
  };

  const handleChangeStyle = (value: SegmentedValue) => {
    setStyleCard(value as "column" | "row");
  };

  return (
    <div className={s.wrapper}>
      <Row gutter={24} style={{ height: "100%", width: "100%" }}>
        {isFilter && data && categories && (
          <Col span={4} style={{ height: "100%" }}>
            <ProductFilter
              data={data}
              subCategoryState={subCategoryState}
              categories={categories}
              brandState={brandState}
              handleChangeBrand={handleChangeBrand}
              handleChangeSubCategory={handleChangeSubCategory}
            />
          </Col>
        )}
        <Col span={20}>
          <div className={s.bar}>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
              }}
            >
              {brandState.map((item) => (
                <Tag key={item} style={{ userSelect: "none" }}>
                  {correctionName(item)}
                </Tag>
              ))}
            </div>
            <Segmented
              size="large"
              onChange={handleChangeStyle}
              value={styleCard}
              options={[
                {
                  value: "row",
                  icon: <BarsOutlined />,
                },
                {
                  value: "column",
                  icon: <AppstoreOutlined />,
                },
              ]}
            />
          </div>
          <List
            loading={loading}
            grid={
              styleCard === "column"
                ? {
                    gutter: 20,
                    xs: 1,
                    sm: 1,
                    md: 2,
                    lg: 3,
                    xl: 3,
                    xxl: 4,
                  }
                : undefined
            }
            pagination={{
              current: pageState,
              onChange: handlePagination,
              pageSize: 12,
              total: totalProduct,
              showQuickJumper: true,
              showSizeChanger: false,
            }}
            dataSource={products}
            renderItem={(product) => (
              <List.Item style={{ borderBlockEnd: "none", width: "100%" }}>
                <ProductCard product={product} flexDirection={styleCard} />
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </div>
  );
};

export default ProductList;
