import { FC } from "react";
import cn from "classnames";
import { ShoppingCartOutlined } from "@ant-design/icons";
import styles from "./IconCart.module.scss";

interface IconBasketProps {
  onClick?: () => void;
  activeIcon?: boolean;
}

const IconCart: FC<IconBasketProps> = ({ activeIcon, onClick }) => {
  return (
    <div
      className={cn(styles.basket, activeIcon && styles.active)}
      onClick={onClick}
    >
      <ShoppingCartOutlined style={{ fontSize: "1.4rem" }} />
    </div>
  );
};

export default IconCart;
