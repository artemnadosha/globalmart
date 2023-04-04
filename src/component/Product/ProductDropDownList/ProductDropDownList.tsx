import { FC } from "react";
import { TypeProduct } from "../../../types/TypeProduct";
import ProductDropDownItem from "./ProductDropDownItem/ProductDropDownItem";
import styles from "./ProductDropDownList.module.scss";
import { Button } from "../../../UI";
import { useNavigate } from "react-router-dom";
import { correctionName } from "../../../utils";

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
    <div className={styles.wrapper}>
      <h2>My {correctionName(itemId)}</h2>
      {products.map((product) => (
        <ProductDropDownItem
          key={product.id}
          product={product}
          itemId={itemId}
        />
      ))}
      <div className={styles.buttonWrapper}>
        <Button type={"primary"} onClick={handleGoTo}>
          {textButton}
        </Button>
      </div>
    </div>
  );
};

export default ProductDropDownList;
