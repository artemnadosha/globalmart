import { FC } from "react";
import cn from "classnames";
import { ShoppingCartOutlined } from "@ant-design/icons";
import s from "./IconCart.module.scss";

interface IconBasketProps {
  onClick?: () => void;
  activeIcon?: boolean;
}

const IconCart: FC<IconBasketProps> = ({ activeIcon, onClick }) => {
  return (
    <ShoppingCartOutlined
      style={{ fontSize: "1.4rem" }}
      className={cn(s.cart, activeIcon && s.active)}
      onClick={onClick}
    />
  );
};

export default IconCart;
