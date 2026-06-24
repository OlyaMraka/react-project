import type {FC} from "react";
import {Outlet} from "react-router-dom";
import AdditionalMenuComponent from "../components/additionalMenuComponents/AdditionalMenuComponent.tsx";

const UsersPage: FC = () => {
    return (
        <div className="users-page">
            <h2>Users</h2>
            <AdditionalMenuComponent/>
            <Outlet/>
        </div>
    );
}

export default UsersPage;
