import Header from "../../component/header/Header";
import { FC, useMemo } from "react";
import { Outlet } from "react-router-dom";
import { Row } from "antd";
import PurchaseConfirmationModal from "../../component/purchase-confirmation-modal/PurchaseConfirmationModal";
import { useModalReducer } from "../../hooks";
import { useGetProductsInfoQuery } from "../../store/api/products.api";
import Navbar from "../../component/navbar/Navbar";
import { Content } from "../../UI";

const MainPage: FC = () => {
  const { isActiveModal } = useModalReducer();

  const { data, isLoading } = useGetProductsInfoQuery();

  const dataCategory = useMemo(
    () => data && data.map((item) => item.category),
    [data]
  );

  return (
    <Row gutter={24} style={{ marginLeft: 0, marginRight: 0 }}>
      <Header />
      <Navbar productCategories={dataCategory} isLoading={isLoading} />
      <Content>
        <Outlet />
      </Content>
      {isActiveModal && <PurchaseConfirmationModal />}
    </Row>
  );
};

export default MainPage;
