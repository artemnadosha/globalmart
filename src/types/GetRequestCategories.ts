type subCategoriesBrandsRequest = {
  name: string;
  total: number;
};

type brandsAllRequest = {
  name: string;
  total: number;
};

export type subCategoriesRequest = {
  name: string;
  total: number;
  brands: subCategoriesBrandsRequest[];
};

export interface GetRequestProductInfo {
  category: string;
  total: number;
  subCategories: subCategoriesRequest[];
  brandsAll: string[];
}
