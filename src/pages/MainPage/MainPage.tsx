import Header from "../../component/Header/Header";
import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import Sidebar from "../../component/Sidebar/Sidebar";
import styles from "./MainPage.module.scss";

const MainPage: FC = () => {
  return (
    <Layout className={styles.wrapper}>
      <Header />
      <Layout className={styles.wrapper}>
        <Sidebar />
        <Outlet />
      </Layout>
    </Layout>
  );
};

export default MainPage;
