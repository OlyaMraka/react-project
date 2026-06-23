import type {FC} from "react";
import MenuComponent from "../components/menu-component/menu-component.tsx";
import {Outlet} from "react-router-dom";

const MainLayout: FC = () => {
    return (
        <div className="main-layout">
            <MenuComponent/>
            <Outlet/>
        </div>
    )
}

export default MainLayout;