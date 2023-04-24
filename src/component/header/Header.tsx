import { FC } from "react";
import { useNavigate } from "react-router-dom";
import HeaderActionsItem from "./header-actions-item/HeaderActionsItem";
import { Button, Content, IconCart, IconFavorite, IconUser } from "../../UI";
import { useCartReducer, useFavoriteReducer } from "../../hooks";

import { ROUTES } from "../../utils/const";
import { Col, Layout } from "antd";
import s from "./Header.module.scss";

const { Header: HeaderAnt } = Layout;

const Header: FC = () => {
  const navigate = useNavigate();
  const { favoriteItems } = useFavoriteReducer();
  const { cartItems } = useCartReducer();

  const handleBack = () => {
    navigate(`${ROUTES.PRODUCTS}/all?page=1`);
  };

  return (
    <HeaderAnt className={s.wrapperHeader}>
      <Col span={20} offset={2} style={{ padding: 0 }}>
        <div className={s.header}>
          <div onClick={handleBack}>HOME</div>
          <div>SEARCH</div>
          <div className={s.wrapperActions}>
            <IconUser />
            <HeaderActionsItem
              products={favoriteItems}
              icon={<IconFavorite />}
              listId="favorite"
              textButton="Go to favorite"
              colorBadge="red"
            />
            <HeaderActionsItem
              products={cartItems}
              icon={<IconCart />}
              listId="cart"
              textButton="Go to cart"
              colorBadge="blue"
            />
            <Button type="primary">Sign In</Button>
          </div>
        </div>
      </Col>
    </HeaderAnt>
  );
};

export default Header;
