import { FC } from "react";
import { CartList } from "../../component/Cart";
import { Content } from "../../UI";

const CartPage: FC = () => {
  return (
    <Content>
      <CartList />
    </Content>
  );
};

export default CartPage;
