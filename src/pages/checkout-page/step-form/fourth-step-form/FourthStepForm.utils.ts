import { ColumnsType } from "antd/es/table";
import { TypeProduct } from "../../../../types/TypeProduct";

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
