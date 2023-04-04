import './App.module.scss';
import React, {useCallback, useEffect, useState} from 'react';
import {TypeProduct} from './types/TypeProduct';
import ContextStore from './utils/ContextStore';
import AppRouter from './component/AppRouter/AppRouter';
import {BrowserRouter, useLocation} from 'react-router-dom';
import {SERVICES_GET_REQUEST} from "./services/request";


const App = () => {
    const [products, setProducts] = useState<TypeProduct[]>([]);
    const [cartItem, setCartItem] = useState<TypeProduct[]>([]);
    const [favoriteItem, setFavoriteItem] = useState<TypeProduct[]>([]);
    const [productCategory, setProductCategory] = useState<string>('all');


    const getProduct = useCallback(async () => {

        if (!!productCategory && productCategory !== 'all') {
            const {res, status} = await SERVICES_GET_REQUEST.getProductCategory(productCategory)

            if (status === 200) {
                setProducts(res.products)
            }
        } else {
            const {res, status} = await SERVICES_GET_REQUEST.getProduct()
            if (status === 200) {
                setProducts(res.products)
            }
        }
    }, [productCategory])

    useEffect(() => {
        getProduct()
    }, [getProduct]);


    return (
        <BrowserRouter>
            <ContextStore.Provider
                value={{
                    cartItem,
                    setCartItem,
                    favoriteItem,
                    setFavoriteItem,
                    products,
                    setProductCategory
                }}>
                <AppRouter/>
            </ContextStore.Provider>
        </BrowserRouter>

    );
};

export default App;
