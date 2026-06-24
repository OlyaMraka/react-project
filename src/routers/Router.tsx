import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
import UsersPage from "../pages/users-page.tsx";
import JsonplaceholderPage from "../pages/jsonplaceholder-page.tsx";
import DummyJsonPage from "../pages/dummyjson-page.tsx";
import PostsPage from "../pages/posts-page.tsx";
import CommentsPage from "../pages/comments-page.tsx";

export const router = createBrowserRouter([
    { path: "/", element: <MainLayout/>, children: [
            {path: "users", element: <UsersPage/>, children: [
                    {path: "jsonplaceholder", element: <JsonplaceholderPage/>},
                    {path: "dummyjson", element: <DummyJsonPage/>}
                ]},

            {path: "posts", element: <PostsPage/>, children: [
                    {path: "jsonplaceholder", element: <JsonplaceholderPage/>},
                    {path: "dummyjson", element: <DummyJsonPage/>}
                ]},

            {path: "comments", element: <CommentsPage/>, children: [
                    {path: "jsonplaceholder", element: <JsonplaceholderPage/>},
                    {path: "dummyjson", element: <DummyJsonPage/>}
                ]},
        ]}
]);
