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

const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<MainPage />}>
        <Route index element={<HomePage />} />
        <Route path={ROUTES.CART} element={<CartPage />} />
        <Route path={ROUTES.FAVORITE} element={<FavoritePage />} />

        <Route path={ROUTES.PRODUCTS} element={<ProductsPage />}>
          <Route path={ROUTES.PRODUCT_CATEGORIES} element={<ProductsPage />} />
          <Route
            path={`${ROUTES.PRODUCT_CATEGORIES}/*`}
            element={<Navigate to={`/gadget-and-electronics?page=1`} />}
          />
        </Route>
        <Route path="test" element={<div>test</div>} />
        <Route path={ROUTES.PRODUCT} element={<ProductInfoPage />} />
        <Route
          path={ROUTES.PRODUCTS}
          element={<Navigate to={`gadget-and-electronics?page=1`} />}
        />
      </Route>

      <Route path={ROUTES.CHECKOUT} element={<CheckoutPage />} />
    </Routes>
  );
};

export default AppRouter;
