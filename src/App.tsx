import "./App.module.scss";
import {useEffect, useState} from "react";
import {TypeProduct} from "./types/TypeProduct";
import ProductList from "./component/Product/ProductList/ProductList";
import Header from "./component/Header/Header";
import styles from './App.module.scss'
import ContextStore from "./tools/ContextStore";
import ProductInfo from "./pages/ProductPage/ProductInfo/ProductInfo";
import AppRouter from "./component/AppRouter/AppRouter";
import {BrowserRouter} from "react-router-dom";

const App = () => {
    const [products, setProducts] = useState<TypeProduct[]>([]);
    const [basketItem, setBasketItem] = useState<TypeProduct[]>([])
    const [likedItem, setLikedItem] = useState<TypeProduct[]>([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('./product.json')
            const json = await response.json()
            setProducts(json.products.splice(1, 10))

        }
        if (!products[0]) {
            fetchData()
        }
    })


    return (
        <BrowserRouter>
            <ContextStore.Provider
                value={{
                    basketItem,
                    setBasketItem,
                    likedItem,
                    setLikedItem,
                    products

                }}>
                <AppRouter/>
            </ContextStore.Provider>
        </BrowserRouter>

    );
}

export default App;
