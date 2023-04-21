import { FC } from "react";
import s from "./HeaderOrderReview.module.scss";

interface HeaderOrderReviewProps {
  lengthCartItem: number;
}

const HeaderOrderReview: FC<HeaderOrderReviewProps> = ({ lengthCartItem }) => {
  return (
    <div className={s.wrapper}>
      <p>Order Review</p> <span>{lengthCartItem} items in cart</span>
    </div>
  );
};

export default HeaderOrderReview;
