import { Checkbox, Collapse, Radio, RadioChangeEvent, Space } from "antd";
import { FC } from "react";
import s from "./ProductFilter.module.scss";
import FilterRadioButton from "./product-filter-radio-button/FilterRadioButton";
import { correctionName } from "../../../utils";
import { CheckboxValueType } from "antd/es/checkbox/Group";
import { GetRequestProductInfo } from "../../../types/GetRequestCategories";

const { Panel } = Collapse;

interface ProductFilterProps {
  data: GetRequestProductInfo[];
  handleChangeSubCategory: (category: string) => void;
  handleChangeBrand: (brands: string[]) => void;
  subCategoryState: string;
  brandState: string[];
  categories: string;
}

const ProductFilter: FC<ProductFilterProps> = ({
  categories,
  data,
  subCategoryState,
  brandState,
  handleChangeSubCategory,
  handleChangeBrand,
}) => {
  const isCategoryWithCategory = data?.find(
    (item) => item.category === categories
  )!;

  const isCategoryFilter =
    isCategoryWithCategory &&
    isCategoryWithCategory.subCategories.find(
      (item) => subCategoryState !== "all" && item.name === subCategoryState
    );

  const handleChangeCategoryKey = (key: RadioChangeEvent) => {
    handleChangeSubCategory(key.target.value);
  };

  const handleChangeBrandKey = (key: CheckboxValueType[]) => {
    handleChangeBrand(key as string[]);
  };

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
          value={subCategoryState}
          className={s.radioGroup}
          onChange={handleChangeCategoryKey}
        >
          <FilterRadioButton
            value="all"
            title="All"
            className={s.buttonCategory}
          />
          {isCategoryWithCategory?.subCategories &&
            isCategoryWithCategory.subCategories.map((item) => (
              <FilterRadioButton
                key={item.name}
                value={item.name}
                className={s.buttonCategory}
                title={item.name}
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
        <Checkbox.Group onChange={handleChangeBrandKey} value={brandState}>
          <Space.Compact direction="vertical">
            <Checkbox value="all">All</Checkbox>
            {!!isCategoryFilter
              ? isCategoryFilter.brands.map((item: any, index: any) => (
                  <Checkbox
                    key={index}
                    value={item.name}
                    style={{ marginInlineStart: 0 }}
                  >
                    {correctionName(item.name)}
                  </Checkbox>
                ))
              : isCategoryWithCategory?.brandsAll.map((item, index) => (
                  <Checkbox
                    key={index}
                    value={item}
                    style={{ marginInlineStart: 0 }}
                  >
                    {correctionName(item)}
                  </Checkbox>
                ))}
          </Space.Compact>
        </Checkbox.Group>
      </Panel>
    </Collapse>
  );
};

export default ProductFilter;
