import styles from "../../App.module.scss";
import Header from "../../component/Header/Header";
import {FC} from "react";
import {Outlet} from "react-router-dom";

const MainPage: FC = () => {
    return (
        <div className={styles.wrapper}>
            <Header/>
            <Outlet/>
        </div>
    );
};

export default MainPage;