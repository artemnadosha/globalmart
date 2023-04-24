import { Collapse, Menu, Radio, Tabs } from "antd";
import { FC } from "react";
import s from "./ProductFilter.module.scss";
import FilterRadioButton from "./product-filter-radio-button/FilterRadioButton";
import { useParams } from "react-router-dom";
import { useGetProductsInfoQuery } from "../../../store/api/products.api";

const { Panel } = Collapse;

const ProductFilter: FC = () => {
  const { categories } = useParams();
  const { data } = useGetProductsInfoQuery();

  const isCategory = data && data.find((item) => item.category === categories);

  return (
    <Collapse
      defaultActiveKey={["1"]}
      ghost
      size="large"
      style={{ height: "100%" }}
      expandIconPosition="end"
    >
      <Panel
        header="Category"
        key="1"
        style={{
          borderTop: "1px solid #DEE2E7",
          width: "100%",
        }}
      >
        <Radio.Group
          buttonStyle="solid"
          style={{ display: "flex", flexDirection: "column" }}
          defaultValue=""
          className={s.radioGroup}
        >
          <FilterRadioButton
            value=""
            title="All"
            className={s.buttonCategory}
          />
          {isCategory?.subCategories &&
            isCategory.subCategories.map((item) => (
              <FilterRadioButton
                value={item}
                className={s.buttonCategory}
                title={item}
              />
            ))}
        </Radio.Group>
      </Panel>
      <Panel
        header="Brands"
        key="2"
        style={{
          borderTop: "1px solid #DEE2E7",
          borderBottom: "1px solid #DEE2E7",
        }}
      >
        <Radio.Group
          buttonStyle="solid"
          style={{ display: "flex", flexDirection: "column" }}
          defaultValue=""
          className={s.radioGroup}
        >
          <FilterRadioButton
            value=""
            title="All"
            className={s.buttonCategory}
          />
          {isCategory?.brand &&
            isCategory.brand.map((item) => (
              <FilterRadioButton
                value={item}
                className={s.buttonCategory}
                title={item}
              />
            ))}
        </Radio.Group>
      </Panel>
    </Collapse>
  );
};

export default ProductFilter;
