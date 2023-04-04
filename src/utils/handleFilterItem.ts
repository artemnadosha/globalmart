import { TypeProduct } from "../types/TypeProduct";

interface handleFilterItemProps {
  state: TypeProduct[];
  id: number;
}

export const handleFilterItem = ({ state, id }: handleFilterItemProps) => {
  return state.filter((item) => item.id !== id);
};
