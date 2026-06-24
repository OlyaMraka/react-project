import type {FC} from "react";
import {Outlet} from "react-router-dom";
import AdditionalMenuComponent from "../components/additional-menu-components/additional-menu.tsx";

const PostsPage: FC = () => {
    return (
        <div className="posts-page-block">
            <h2>Posts</h2>
            <AdditionalMenuComponent/>
            <Outlet/>
        </div>
    );
};

export default PostsPage;
