import { FC, useEffect, useState } from "react";
import { CartCheckout, CartItem } from "../index";
import { useCartReducer } from "../../../hooks";
import { List } from "antd";
import {
  sumCalculateDiscountAmount,
  sumCalculatePriceWithoutDiscount,
} from "../../../utils";

const CartList: FC = () => {
  const { cartItems, removeProductCart, changeQuantityItemProducts } =
    useCartReducer();
  const [priceWithoutDiscountAll, setPriceWithoutDiscountAll] =
    useState<number>(0);
  const [valueDiscountPercentageAll, setValueDiscountPercentageAll] =
    useState<number>(0);

  const handleSetCartItemQuantity = (id: number, quantity: number) => {
    changeQuantityItemProducts(id, quantity);
  };

  useEffect(() => {
    setValueDiscountPercentageAll(sumCalculateDiscountAmount(cartItems));
    setPriceWithoutDiscountAll(sumCalculatePriceWithoutDiscount(cartItems));
  }, [cartItems]);

  return (
    <div
      style={{
        width: "100%",
        padding: "20px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <List itemLayout="horizontal" style={{ width: "50%" }}>
        {!!cartItems.length &&
          cartItems.map((product) => (
            <CartItem
              key={product.id}
              product={product}
              removeFromCart={removeProductCart}
              handleSetCartItemQuantity={handleSetCartItemQuantity}
            />
          ))}
      </List>
      <div style={{ width: "30%" }}>
        <CartCheckout
          price={priceWithoutDiscountAll}
          discount={valueDiscountPercentageAll}
        />
      </div>
    </div>
  );
};

export default CartList;
