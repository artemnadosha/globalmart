import { TypeProduct } from "../types/TypeProduct";

interface findProductProps {
  product: TypeProduct[];
  id: number;
}

export const handleFindProduct = ({ product, id }: findProductProps) =>
  !!product.find((item) => item.id === id);
