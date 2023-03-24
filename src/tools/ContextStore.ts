import { createContext, Dispatch, SetStateAction } from 'react';
import { TypeProduct } from '../types/TypeProduct';

interface ContextStore {
    basketItem: TypeProduct[];
    setBasketItem: Dispatch<SetStateAction<TypeProduct[]>>;
    likedItem: TypeProduct[];
    setLikedItem: Dispatch<SetStateAction<TypeProduct[]>>;

    products: TypeProduct[];
}

const ContextStore = createContext<Partial<ContextStore>>({});

export default ContextStore;
