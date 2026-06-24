import type {FC} from "react";
import MainMenuComponent from "../components/mainMenuComponents/MainMenuComponent.tsx";
import {Outlet} from "react-router-dom";

const MainLayout: FC = () => {
    return (
        <div className="main-layout">
            <MainMenuComponent/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;