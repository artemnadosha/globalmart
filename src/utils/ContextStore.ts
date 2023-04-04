import { createContext, Dispatch, SetStateAction } from "react";
import { TypeProduct } from "../types/TypeProduct";

interface ContextStore {
  cartItem: TypeProduct[];
  setCartItem: Dispatch<SetStateAction<TypeProduct[]>>;
  favoriteItem: TypeProduct[];
  setFavoriteItem: Dispatch<SetStateAction<TypeProduct[]>>;
  products: TypeProduct[];
  setProductCategory: Dispatch<SetStateAction<string>>;
}

const ContextStore = createContext<Partial<ContextStore>>({});

export default ContextStore;
