import type {FC} from "react";
import {Outlet} from "react-router-dom";
import AdditionalMenuComponent from "../components/additional-menu-components/additional-menu.tsx";

const UsersPage: FC = () => {
    return (
        <div className="users-page-block">
            <h2>Users</h2>
            <AdditionalMenuComponent/>
            <Outlet/>
        </div>
    );
};

export default UsersPage;
