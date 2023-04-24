import { ColumnsType } from "antd/es/table";
import { ProductInCheckout, TypeProduct } from "../../../../types/TypeProduct";

export const columns: ColumnsType<TypeProduct> = [
  {
    title: "Product Name",
    dataIndex: "title",
    key: "id",
  },
  {
    title: "Quantity",
    dataIndex: "quantity",
  },
];

export const checkoutItem = (cartItems: TypeProduct[]): ProductInCheckout[] =>
  cartItems.map((item) => ({
    id: item.id,
    title: item.title,
    quantity: item.quantity,
  }));
