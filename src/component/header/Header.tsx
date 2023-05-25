import { FC } from "react";
import { Button, IconCart, IconFavorite, IconUser } from "../../UI";
import { useCartReducer, useFavoriteReducer } from "../../hooks";

import { ROUTES } from "../../utils/const";
import { Col, Layout } from "antd";
import s from "./Header.module.scss";
import HeaderActionsDrawer from "./header-actions-drawer/HeaderActionsDrawer";

const { Header: HeaderAnt } = Layout;

const Header: FC = () => {
  const { favoriteItems } = useFavoriteReducer();
  const { cartItems } = useCartReducer();

  return (
    <HeaderAnt className={s.wrapperHeader}>
      <Col span={20} offset={2} style={{ padding: 0 }}>
        <div className={s.header}>
          <div>
            <Button type="primary" href={ROUTES.HOME}>
              HOME
            </Button>
          </div>
          <div className={s.wrapperActions}>
            {/*<IconUser />*/}
            <HeaderActionsDrawer
              products={favoriteItems}
              icon={<IconFavorite />}
              listId="favorite"
              textButton="Go to favorite"
              colorBadge="red"
            />
            <HeaderActionsDrawer
              products={cartItems}
              icon={<IconCart />}
              listId="cart"
              textButton="Go to cart"
              colorBadge="blue"
            />
            {/*<Button type="primary">Sign In</Button>*/}
          </div>
        </div>
      </Col>
    </HeaderAnt>
  );
};

export default Header;
