import { FC } from "react";
import { useCartReducer, useFavoriteReducer } from "../../../../hooks";
import { Button } from "../../../../UI";
import { TypeProduct } from "../../../../types/TypeProduct";
import s from "./ProductDropDownItem.module.scss";

interface ProductDropDownItemProps {
  product: TypeProduct;
  itemId: string;
}

const ProductDropDownItem: FC<ProductDropDownItemProps> = ({
  product,
  itemId,
}) => {
  const { id, price, thumbnail, title } = product;
  const { removeProductFavorite } = useFavoriteReducer();
  const { removeProductCart } = useCartReducer();
  const handlerRemove = () => {
    if (itemId === "cart") {
      removeProductCart(id);
    } else {
      removeProductFavorite(id);
    }
  };

  return (
    <div className={s.wrapper}>
      <img src={thumbnail} alt={title} className={s.img} />
      <div className={s.infoWrapper}>
        <div className={s.info}>
          <p>Name:</p>
          <p>{title}</p>
        </div>
        <div className={s.info}>
          <p>Price:</p>
          <p>${price}</p>
        </div>
      </div>
      <div className={s.button}>
        <Button onClick={handlerRemove} type={"default"} danger={true}>
          Remove
        </Button>
      </div>
    </div>
  );
};

export default ProductDropDownItem;
