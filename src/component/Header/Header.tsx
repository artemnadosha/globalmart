import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useContextStore } from "../../hooks/useContextStore";
import { ROUTES } from "../../utils/const";
import { Layout } from "antd";
import styles from "./Header.module.scss";
import HeaderActionsItem from "./HeaderActionsItem/HeaderActionsItem";
import { IconCart, IconFavorite } from "../../UI";

const { Header: HeaderAnt } = Layout;

const Header: FC = () => {
  const { cartItem, favoriteItem, setProductCategory } = useContextStore();
  const navigate = useNavigate();

  const handleBack = () => {
    if (setProductCategory) {
      navigate(`${ROUTES.PRODUCTS}/all`);
      setProductCategory("all");
    }
  };

  return (
    <HeaderAnt className={styles.header}>
      <div onClick={handleBack}>HOME</div>
      <div>SEARCH</div>
      <div className={styles.wrapperActions}>
        {favoriteItem && (
          <HeaderActionsItem
            products={favoriteItem}
            icon={<IconFavorite />}
            listId="favorite"
            textButton="Go to favorite"
            colorBadge="red"
          />
        )}

        {cartItem && (
          <HeaderActionsItem
            products={cartItem}
            icon={<IconCart />}
            listId="cart"
            textButton="Go to cart"
            colorBadge="blue"
          />
        )}
      </div>
    </HeaderAnt>
  );
};

export default Header;
