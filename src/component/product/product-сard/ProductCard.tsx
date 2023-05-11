import { FC, memo, useCallback, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { TypeProduct } from "../../../types/TypeProduct";
import {
  ShoppingCartOutlined,
  ArrowRightOutlined,
  LikeOutlined,
} from "@ant-design/icons";
import { calculatePriceWithoutDiscount } from "../../../utils";
import {
  useCartReducer,
  useFavoriteReducer,
  useModalReducer,
} from "../../../hooks";
import { ProductCardImage, ProductMeta } from "./UI";
import s from "./ProductCard.module.scss";

export interface ProductCardProps {
  product: TypeProduct;
  flexDirection: "column" | "row";
}

const ProductCard: FC<ProductCardProps> = memo(({ product, flexDirection }) => {
  const { id, price, discountPercentage, rating, brand, title, thumbnail } =
    product;

  const { addProductFavorite, removeProductFavorite, findProductFavorite } =
    useFavoriteReducer(id);
  const { addProductCart, removeProductCart, findProductCart } =
    useCartReducer(id);
  const { response, productId, toggleIsActiveModal, resetModalValue } =
    useModalReducer();

  const location = useLocation();

  const handleSubmitCart = useCallback(() => {
    if (id === productId) {
      addProductCart(product);
      resetModalValue();
    }
  }, [productId, product, id, resetModalValue, addProductCart]);

  useEffect(() => {
    response && handleSubmitCart();
  }, [response, handleSubmitCart]);

  return (
    <div className={s.card} style={{ flexDirection }}>
      <ProductCardImage
        title={title}
        thumbnail={thumbnail}
        rating={rating}
        maxWidth={flexDirection === "row" ? "300px" : undefined}
      />
      <ProductMeta
        title={title}
        brand={brand}
        price={price}
        priceWithoutDiscount={calculatePriceWithoutDiscount(
          price,
          discountPercentage
        )}
      />
      <div
        className={s.action}
        style={
          flexDirection === "column"
            ? { flexDirection: "row" }
            : { flexDirection: "column" }
        }
      >
        <LikeOutlined
          onClick={
            findProductFavorite
              ? () => removeProductFavorite(id)
              : () => addProductFavorite(product)
          }
          style={findProductFavorite ? { color: "red" } : {}}
        />
        <ShoppingCartOutlined
          onClick={
            findProductCart
              ? () => removeProductCart(id)
              : () => toggleIsActiveModal(id)
          }
          style={findProductCart ? { color: "#1677ff" } : {}}
        />
        <Link to={`${location.pathname}/${id}`}>
          <ArrowRightOutlined />
        </Link>
      </div>
    </div>
  );
});

export default ProductCard;
