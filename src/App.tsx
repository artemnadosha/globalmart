import "./App.module.scss";
import React, { useEffect } from "react";
import AppRouter from "./component/app-router/AppRouter";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;
