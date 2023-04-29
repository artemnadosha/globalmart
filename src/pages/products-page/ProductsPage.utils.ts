import { GetRequestProductInfo } from "../../types/GetRequestCategories";

interface TotalProductsProps {
  category?: string;
  subCategory?: string;
  brand?: string;
  data: GetRequestProductInfo[];
}

export const totalProducts = ({
  category,
  subCategory,
  brand,
  data,
}: TotalProductsProps): number | false => {
  const categoryTotal = data.find((item) => item.category === category);

  if (!categoryTotal) {
    return false;
  }
  const subCategoryTotal =
    !!subCategory &&
    categoryTotal.subCategories.find((item) => item.name === subCategory);

  if (!!category && !subCategory && !brand) {
    return categoryTotal.total;
  } else if (!!category && !!subCategory && !brand) {
    if (subCategoryTotal) {
      return subCategoryTotal.total;
    }
  } else if (!!category && !!brand) {
    const brandArr = brand.split(",");

    if (subCategoryTotal) {
      const brandFilter =
        brandArr.length > 1
          ? subCategoryTotal.brands.filter((item) =>
              brandArr.includes(item.name)
            )
          : [
              subCategoryTotal.brands.find(
                (item) => item.name === brandArr[0]
              )!,
            ];

      return brandFilter.reduce((acc, brand) => acc + brand.total, 0);
    } else {
      return categoryTotal.subCategories.reduce((acc, item) => {
        const brands = item.brands.filter((brand) =>
          brandArr.includes(brand.name)
        );

        const brandTotal = brands.reduce((sum, brand) => sum + brand.total, 0);

        return acc + brandTotal;
      }, 0);
    }
  }

  return false;
};
