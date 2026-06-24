import type {FC} from "react";
import {Outlet} from "react-router-dom";
import AdditionalMenuComponent from "../components/additionalMenuComponents/AdditionalMenuComponent.tsx";

const CommentsPage: FC = () => {
    return (
        <div className="comments-page">
            <h2>Comments</h2>
            <AdditionalMenuComponent/>
            <Outlet/>
        </div>
    );
};

export default CommentsPage;
