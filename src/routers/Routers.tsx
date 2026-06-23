import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/main-layout.tsx";
import UsersPageComponent from "../pages/users-page.tsx";
import PostsPageComponent from "../pages/posts-page.tsx";
import CommentsPageComponent from "../pages/comments-page.tsx";
import ProductsPageComponent from "../pages/products-page.tsx";

export const routers = createBrowserRouter([
    { path: "/", element: <MainLayout/>, children: [
            {path: "users", element: <UsersPageComponent/>},
            {path: "posts", element: <PostsPageComponent/>},
            {path: "comments", element: <CommentsPageComponent/>},
            {path: "products", element: <ProductsPageComponent/>},
        ] },
])