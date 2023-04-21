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
    <div className={cn(s.heart, activeIcon && s.active)} onClick={onClick}>
      <LikeOutlined style={{ fontSize: "1.4rem" }} />
    </div>
  );
};

export default IconFavorite;
