import { FC } from "react";
import s from "./IconFavorite.module.scss";
import cn from "classnames";
import { LikeOutlined } from "@ant-design/icons";

interface IconHeartProps {
  onClick?: () => void;
  activeIcon?: boolean;
}

const IconFavorite: FC<IconHeartProps> = ({ activeIcon, onClick }) => {
  return (
    <LikeOutlined
      style={{ fontSize: "1.4rem" }}
      className={cn(s.favorite, activeIcon && s.active)}
      onClick={onClick}
    />
  );
};

export default IconFavorite;
