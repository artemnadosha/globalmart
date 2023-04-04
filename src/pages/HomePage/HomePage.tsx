import { useContextStore } from "../../hooks/useContextStore";
import { Layout } from "antd";
import { ProductList } from "../../component/Product";
import styles from "./HomePage.module.scss";

const { Content } = Layout;
const HomePage = () => {
  const { products } = useContextStore();

  return (
    <Content className={styles.wrapper}>
      {!!products && <ProductList products={products} />}
    </Content>
  );
};

export default HomePage;
