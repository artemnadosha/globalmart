import { FC, useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { TypeProduct } from "../../../types/TypeProduct";
import {
  ShoppingCartOutlined,
  ArrowRightOutlined,
  LikeOutlined,
} from "@ant-design/icons";
import {
  handleFindProduct,
  calculatePriceWithoutDiscount,
} from "../../../utils";
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

const ProductCard: FC<ProductCardProps> = ({ product, flexDirection }) => {
  const { id, price, discountPercentage, rating, brand, title, thumbnail } =
    product;

  const [isInCart, setIsInCart] = useState<boolean>(false);
  const [isInFavorite, setIsInFavorite] = useState<boolean>(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { favoriteItems, addProductFavorite, removeProductFavorite } =
    useFavoriteReducer();
  const { cartItems, addProductCart, removeProductCart } = useCartReducer();
  const { response, productId, toggleIsActiveModal, resetModalValue } =
    useModalReducer();

  useEffect(() => {
    setIsInCart(handleFindProduct({ product: cartItems, id }));
    setIsInFavorite(handleFindProduct({ product: favoriteItems, id }));
  }, [cartItems, favoriteItems, id]);

  const handlerOpenModal = () => toggleIsActiveModal(id);

  const handleSubmitCart = useCallback(() => {
    if (id === productId) {
      addProductCart(product);
      resetModalValue();
    }
  }, [productId, product, id, resetModalValue, addProductCart]);

  useEffect(() => {
    response && handleSubmitCart();
  }, [response, handleSubmitCart]);

  const handleSubmitFavorite = () => addProductFavorite(product);

  const handleRemoveCartItem = () => removeProductCart(id);

  const handleRemoveFavoriteItem = () => removeProductFavorite(id);

  const handleOpenProduct = () => navigate(`${location.pathname}/${id}`);

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
            isInFavorite ? handleRemoveFavoriteItem : handleSubmitFavorite
          }
          style={isInFavorite ? { color: "red" } : {}}
        />
        <ShoppingCartOutlined
          onClick={isInCart ? handleRemoveCartItem : handlerOpenModal}
          style={isInCart ? { color: "#1677ff" } : {}}
        />
        <ArrowRightOutlined onClick={handleOpenProduct} />
      </div>
    </div>
  );
};

export default ProductCard;
