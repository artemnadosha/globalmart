import { FC, useEffect, useState } from "react";
import { CartCheckout, CartItem } from "../index";
import { useCartReducer } from "../../../hooks";
import { Col, List, Row } from "antd";
import {
  sumCalculateDiscountAmount,
  sumCalculatePriceWithoutDiscount,
} from "../../../utils";
import { Content } from "../../../UI";

const CartList: FC = () => {
  const { cartItems, removeProductCart, changeQuantityItemProducts } =
    useCartReducer();

  const [priceWithoutDiscountAll, setPriceWithoutDiscountAll] =
    useState<number>(0);
  const [valueDiscountPercentageAll, setValueDiscountPercentageAll] =
    useState<number>(0);
  const [pagination, setPagination] = useState(1);

  const handleSetCartItemQuantity = (id: number, quantity: number) => {
    changeQuantityItemProducts(id, quantity);
  };

  useEffect(() => {
    setValueDiscountPercentageAll(sumCalculateDiscountAmount(cartItems));
    setPriceWithoutDiscountAll(sumCalculatePriceWithoutDiscount(cartItems));
  }, [cartItems]);

  const handlePaginationChange = (page: number) => {
    setPagination(page);
  };

  return (
    <Content>
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
            price={priceWithoutDiscountAll}
            discount={valueDiscountPercentageAll}
          />
        </Col>
      </Row>
    </Content>
  );
};

export default CartList;
