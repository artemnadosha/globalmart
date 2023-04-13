import "./App.module.scss";
import React, { useEffect } from "react";
import AppRouter from "./component/AppRouter/AppRouter";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  // const { fetchProducts } = useProductReducer();
  // const { fetchProductsCategories } = useCategoriesReducer();
  // useEffect(() => {
  //   fetchProducts();
  //   fetchProductsCategories();
  // }, []);

  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;
