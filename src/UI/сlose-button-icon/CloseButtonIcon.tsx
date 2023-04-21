import { FC } from "react";
import s from "./CloseButtonIcon.module.scss";

interface CloseButtonProps {
  onClick?: () => void;
}

const CloseButtonIcon: FC<CloseButtonProps> = ({ onClick }) => {
  return (
    <div onClick={onClick} className={s.closeContainer}>
      <div className={s.leftRight}></div>
      <div className={s.rightLeft}></div>
      <label className={s.close}>close</label>
    </div>
  );
};

export default CloseButtonIcon;
