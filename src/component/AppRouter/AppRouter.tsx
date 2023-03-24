import {Route, Routes, useLocation, useParams} from "react-router-dom";

import {FC} from "react";
import {MainPage} from "../../pages";
import {routes} from "../../utils/const";
import ProductPage from "../../pages/ProductPage/ProductPage";
import HomePage from "../../pages/HomePage/HomePage";

const AppRouter: FC = () => {
    return (
        <Routes>
            <Route path={routes.HOME} element={<MainPage/>}>
                <Route index element={<HomePage/>}/>
                <Route path={routes.PRODUCT} element={<ProductPage/>}/>
            </Route>

        </Routes>
    );
};

export default AppRouter;
