import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

interface useCreateUrlReturnProps {
  pageState: number;
  subCategoryState: string;
  brandState: string[];
  handleChangeSubCategory: (subCategory: string) => void;
  handleChangeBrand: (brand: string[]) => void;
  handleChangeCategory: () => void;
  handleChangePage: (key: number) => void;
}

export const useFilterProducts = (): useCreateUrlReturnProps => {
  const navigate = useNavigate();
  const params = useParams<{ categories: string }>();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const page = Number(searchParams.get("page"));
  const subCategory = searchParams.get("category");
  const brand = searchParams.get("brand");

  const [pageState, setPageState] = useState(page);
  const [subCategoryState, setSubCategoryState] = useState(
    subCategory || "all"
  );
  const [categoryState, setCategoryState] = useState(params.categories || "");
  const [brandState, setBrandState] = useState<string[]>(
    brand?.split(",") || ["all"]
  );

  const pageQuery = "?page=";
  const subCategoryQuery = "&category=";
  const brandQuery = "&brand=";
  const handleChangeSubCategory = (subCategory: string) => {
    setSubCategoryState(subCategory);
    setBrandState(["all"]);
    setPageState(1);
  };
  const handleChangeBrand = (brand: string[]) => {
    const filterWithoutBrandAll = brand.filter((item) => item !== "all");
    if (brand.length >= 1) {
      setBrandState(filterWithoutBrandAll);
    } else {
      setBrandState(["all"]);
    }
    setPageState(1);
  };

  const handleChangePage = (key: number) => {
    setPageState(key);
  };

  const handleChangeCategory = () => {
    setBrandState(["all"]);
    setSubCategoryState("all");
    setPageState(page);
  };

  useEffect(() => {
    if (params.categories) {
      setCategoryState(params.categories);
      setBrandState(brand?.split(",") || ["all"]);
      setSubCategoryState(subCategory || "all");
      setPageState(page || 1);
    }
  }, [params.categories]);

  useEffect(() => {
    const pageStateNavigate = pageQuery + pageState;
    const subCategoryStateNavigate =
      subCategoryState !== "all" ? subCategoryQuery + subCategoryState : "";
    const brandStateNavigate = !!brandState.find((item) => item === "all")
      ? ""
      : brandQuery + brandState.join(",");

    navigate(
      categoryState +
        pageStateNavigate +
        subCategoryStateNavigate +
        brandStateNavigate
    );
  }, [subCategoryState, brandState, pageState]);

  return {
    pageState,
    brandState,
    subCategoryState,
    handleChangeSubCategory,
    handleChangeBrand,
    handleChangeCategory,
    handleChangePage,
  };
};

export default useFilterProducts;
