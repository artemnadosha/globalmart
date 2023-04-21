import { FC } from "react";
import s from "./ContentCheckoutSummary.module.scss";

interface CheckoutSummaryProps {
  discount: number;
  subtotal: number;
  shippingPrice: number;
}

const ContentCheckoutSummary: FC<CheckoutSummaryProps> = ({
  discount,
  subtotal,
  shippingPrice,
}) => {
  return (
    <div
      className={s.wrapper}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <span>Subtotal: ${subtotal}</span>
      <span>Discount: ${discount}</span>
      <span>Shipping: {shippingPrice}</span>
      <p>Total ${subtotal - discount + shippingPrice}</p>
    </div>
  );
};

export default ContentCheckoutSummary;
