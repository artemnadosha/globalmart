import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../UI";
import ProductDropDownItem from "./ProductDropDownItem/ProductDropDownItem";
import { correctionName } from "../../../utils";
import { TypeProduct } from "../../../types/TypeProduct";
import s from "./ProductDropDownList.module.scss";

interface ProductDropDownListProps {
  products: TypeProduct[];
  textButton?: string;
  itemId: string;
}

const ProductDropDownList: FC<ProductDropDownListProps> = ({
  products,
  textButton,
  itemId,
}) => {
  const navigate = useNavigate();

  const handleGoTo = () => {
    navigate(itemId);
  };

  return (
    <div className={s.wrapper}>
      <h2>My {correctionName(itemId)}</h2>
      {products.map((product) => (
        <ProductDropDownItem
          key={product.id}
          product={product}
          itemId={itemId}
        />
      ))}
      <div className={s.buttonWrapper}>
        <Button type={"primary"} onClick={handleGoTo}>
          {textButton}
        </Button>
      </div>
    </div>
  );
};

export default ProductDropDownList;
