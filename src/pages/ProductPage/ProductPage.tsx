import {FC} from 'react';
import {useContextStore} from '../../hooks/useContextStore';
import {useLocation} from 'react-router-dom';
import ProductInfo from './ProductInfo/ProductInfo';
import {ROUTES} from "../../utils/const";

const ProductPage: FC = () => {
    const {products} = useContextStore();
    const {pathname} = useLocation();

    const id = pathname.split('/')

    const product = products?.find(product => product.id === +id[id.length - 1]);

    return <>
        {!!product && <ProductInfo product={product}/>}
    </>;
};

export default ProductPage;