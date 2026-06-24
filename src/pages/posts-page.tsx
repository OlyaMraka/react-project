import type {FC} from "react";
import {Outlet} from "react-router-dom";
import AdditionalMenuComponent from "../components/additionalMenuComponents/AdditionalMenuComponent.tsx";

const PostsPage: FC = () => {
    return (
        <div className="posts-page">
            <h2>Posts</h2>
            <AdditionalMenuComponent/>
            <Outlet/>
        </div>
    );
};

export default PostsPage;
