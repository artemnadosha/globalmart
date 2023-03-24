import { FC } from 'react';
import { useContextStore } from '../../hooks/useContextStore';
import { useLocation } from 'react-router-dom';
import ProductInfo from './ProductInfo/ProductInfo';

const ProductPage: FC = () => {
    const { products } = useContextStore();
    const location = useLocation();

    const product = products?.find(product => `/${product.id}` === location.pathname);

    return <>
        {!!product && <ProductInfo product={product} />}
    </>;
};

export default ProductPage;