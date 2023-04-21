import React, { FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ROUTES } from "../../utils/const";
import {
  CartPage,
  CheckoutPage,
  FavoritePage,
  HomePage,
  MainPage,
  ProductInfoPage,
  ProductsPage,
} from "../../pages";
import { useCartReducer } from "../../hooks";

const AppRouter: FC = () => {
  const { cartItems } = useCartReducer();

  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<MainPage />}>
        <Route index element={<HomePage />} />
        <Route path={ROUTES.CART} element={<CartPage />} />
        <Route path={ROUTES.FAVORITE} element={<FavoritePage />} />

        <Route path={ROUTES.PRODUCTS} element={<ProductsPage />}>
          <Route path={ROUTES.PRODUCT_CATEGORIES} element={<ProductsPage />} />
        </Route>
        <Route path="test" element={<div>test</div>} />
        <Route path={ROUTES.PRODUCT} element={<ProductInfoPage />} />
      </Route>
      <Route
        path="/*"
        element={<Navigate to={`${ROUTES.PRODUCTS}/all?page=1`} />}
      />
      {!!cartItems.length && (
        <Route path={ROUTES.CHECKOUT} element={<CheckoutPage />} />
      )}
    </Routes>
  );
};

export default AppRouter;
