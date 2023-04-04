import { FC } from "react";
import { CartList } from "../../component/Cart";
import styles from "./CartPage.module.scss";

const CartPage: FC = () => {
  return (
    <div className={styles.wrapper}>
      <CartList />
    </div>
  );
};

export default CartPage;
