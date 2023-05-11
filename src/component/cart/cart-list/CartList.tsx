import { FC, useState } from "react";
import { CartCheckout, CartItem } from "../index";
import { useCartReducer } from "../../../hooks";
import { Col, List, Row } from "antd";
import {
  sumCalculateDiscountAmount,
  sumCalculatePriceWithoutDiscount,
} from "../../../utils";

const CartList: FC = () => {
  const { cartItems, removeProductCart, changeQuantityItemProducts } =
    useCartReducer();

  const [pagination, setPagination] = useState(1);

  const handleSetCartItemQuantity = (id: number, quantity: number) => {
    changeQuantityItemProducts(id, quantity);
  };

  const handlePaginationChange = (page: number) => {
    setPagination(page);
  };

  console.log("render cart list");
  return (
    <Row gutter={24}>
      <Col span={16}>
        <List
          pagination={{
            current: pagination,
            onChange: handlePaginationChange,
            pageSize: 4,
            total: cartItems.length,
          }}
          dataSource={cartItems.slice((pagination - 1) * 4, pagination * 4)}
          renderItem={(cartItem) => (
            <CartItem
              key={cartItem.id}
              product={cartItem}
              removeFromCart={removeProductCart}
              handleSetCartItemQuantity={handleSetCartItemQuantity}
            />
          )}
        />
      </Col>
      <Col span={6} offset={2}>
        <CartCheckout
          price={sumCalculatePriceWithoutDiscount(cartItems)}
          discount={sumCalculateDiscountAmount(cartItems)}
        />
      </Col>
    </Row>
  );
};

export default CartList;
