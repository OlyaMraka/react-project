import type {FC} from "react";
import DummyUserContainer from "../components/dummyUserComponents/dummyUsersContainer/DummyUsersContainer.tsx";
import {Outlet} from "react-router-dom";

const MainLayout: FC = () => {
    return (
        <div className="main-layout">
            <DummyUserContainer limit={20}/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;
