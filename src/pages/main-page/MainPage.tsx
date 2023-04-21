import Header from "../../component/header/Header";
import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Col, Layout, Row } from "antd";
import Sidebar from "../../component/Sidebar/Sidebar";
import s from "./MainPage.module.scss";
import PurchaseConfirmationModal from "../../component/purchase-confirmation-modal/PurchaseConfirmationModal";
import { useModalReducer } from "../../hooks";
import { useGetProductsCategoriesQuery } from "../../store/api/products.api";
import Navbar from "../../component/navbar/Navbar";

const MainPage: FC = () => {
  const { isActiveModal } = useModalReducer();

  const { data } = useGetProductsCategoriesQuery();

  return (
    <Row gutter={24} style={{ marginLeft: 0, marginRight: 0 }}>
      <Col span={24} style={{ padding: 0 }}>
        <Header />
      </Col>
      <Col span={24} style={{ padding: 0 }}>
        {data && <Navbar productCategories={data} />}
      </Col>
      {/*{data && <Sidebar productCategories={data.slice(0, 10)} />}*/}
      <Col span={20} offset={2} style={{ padding: 0 }}>
        <Outlet />
      </Col>
      {isActiveModal && <PurchaseConfirmationModal />}
    </Row>
  );
};

export default MainPage;
