import React, { FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ROUTES } from "../../utils/const";
import { CartPage, HomePage, MainPage, ProductPage } from "../../pages";

const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<MainPage />}>
        <Route index element={<Navigate to={`${ROUTES.PRODUCTS}/all`} />} />
        <Route path={ROUTES.CART} element={<CartPage />} />
        <Route path={ROUTES.FAVORITE} element={<div>favorite</div>} />
        <Route path={ROUTES.PRODUCTS} element={<HomePage />}>
          <Route path={ROUTES.PRODUCT_CATEGORIES} element={<HomePage />} />
        </Route>
        <Route path={ROUTES.PRODUCT} element={<ProductPage />} />
      </Route>
      <Route path="/*" element={<Navigate to={ROUTES.PRODUCTS} />} />
    </Routes>
  );
};

export default AppRouter;
