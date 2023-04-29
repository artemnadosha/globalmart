import { FC } from "react";
import { correctionName } from "../../../../../utils";
import s from "./ProductMeta.module.scss";
import cn from "classnames";

export interface ProductMetaProps {
  title: string;
  brand: string;
  price: number;
  priceWithoutDiscount: number;
}

const ProductMeta: FC<ProductMetaProps> = ({
  priceWithoutDiscount,
  price,
  title,
  brand,
}) => {
  return (
    <div className={s.description}>
      <div className={s.priceWrapper}>
        <h4>${price}</h4>
        <p className={cn(s.discount, "verySmall")}>${priceWithoutDiscount}</p>
      </div>
      <div>
        <p className={s.text}>{correctionName(title)}</p>
        <p className={cn("verySmall", s.text, s.brand)}>
          {correctionName(brand)}
        </p>
      </div>
    </div>
  );
};

export default ProductMeta;
