import Header from "../../component/Header/Header";
import { FC, useEffect } from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
import { Layout } from "antd";
import Sidebar from "../../component/Sidebar/Sidebar";
import styles from "./MainPage.module.scss";
import PurchaseConfirmationModal from "../../component/PurchaseСonfirmationModal/PurchaseConfirmationModal";
import useProductReducer from "../../hooks/useProductReducer";
import useCategoriesReducer from "../../hooks/useCategoriesReducer";
import { useModalReducer } from "../../hooks";

const MainPage: FC = () => {
  const { isActiveModal } = useModalReducer();
  const { fetchProducts } = useProductReducer();
  const { productCategories, fetchProductsCategories } = useCategoriesReducer();
  const params = useParams<{ categories: string }>();

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const page = Number(searchParams.get("page"));

  useEffect(() => {
    fetchProductsCategories();
  }, [fetchProductsCategories]);

  useEffect(() => {
    if (params.categories === "all") {
      fetchProducts("", (page - 1) * 10);
    } else {
      fetchProducts(params.categories || "", (page - 1) * 10);
    }
  }, [params.categories, page, fetchProducts]);

  return (
    <Layout className={styles.wrapper}>
      <Header />
      <Layout className={styles.wrapper} style={{ height: "100%" }}>
        <Sidebar productCategories={productCategories} />
        <Outlet />
      </Layout>
      {isActiveModal && <PurchaseConfirmationModal />}
    </Layout>
  );
};

export default MainPage;
