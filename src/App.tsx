import "./App.module.scss";
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
