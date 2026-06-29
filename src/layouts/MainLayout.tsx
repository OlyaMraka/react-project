import type {FC} from "react";
import MainMenu from "../components/mainMenuComponent/MainMenu.tsx";
import {Outlet} from "react-router-dom";

const MainLayout: FC = () => {
    return (
        <div className="main-layout">
            <MainMenu/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;
