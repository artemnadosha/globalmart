import { FC } from "react";
import Meta from "antd/es/card/Meta";
import { correctionName } from "../../../../../utils";
import s from "./ProductMeta.module.scss";
import cn from "classnames";

interface ProductMetaProps {
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
    <Meta
      style={{ margin: -15 }}
      title={correctionName(title)}
      description={
        <div className={s.description}>
          <p className={cn("verySmall", s.brand)}>{brand}</p>
          <div className={s.priceWrapper}>
            <p className={cn(s.discount, "verySmall")}>
              ${priceWithoutDiscount}
            </p>
            <p>${price}</p>
          </div>
        </div>
      }
    />
  );
};

export default ProductMeta;
