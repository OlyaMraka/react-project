import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
import UsersPage from "../pages/users-page.tsx";
import UsersContainer from "../components/userComponents/usersContainer/UsersContainer.tsx";
import DummyUsersContainer from "../components/dummyUserComponents/dummyUsersContainer/DummyUsersContainer.tsx";
import PostContainer from "../components/postComponents/postContainer/PostContainer.tsx";
import DummyPostsContainer from "../components/dummyPostsComponents/dummyPostsContainer/DummyPostContainer.tsx";
import CommentContainer from "../components/commentComponents/commentContainer/CommentContainer.tsx";
import DummyCommentsContainer
    from "../components/dummyCommentsComponents/dummyCommentsContainer/DummyCommentContainer.tsx";
import PostsPage from "../pages/posts-page.tsx";
import CommentsPage from "../pages/comments-page.tsx";

export const router = createBrowserRouter([
    { path: "/", element: <MainLayout/>, children: [
            { path: "users", element: <UsersPage/>, children: [
                    { path: "jsonplaceholder", element: <UsersContainer/>},
                    { path: "dummyjson", element: <DummyUsersContainer limit={100}/>}
                ]},

            { path: "posts", element: <PostsPage/>, children: [
                    { path: "jsonplaceholder", element: <PostContainer/>},
                    { path: "dummyjson", element: <DummyPostsContainer limit={100}/>}
                ]},

            { path: "comments", element: <CommentsPage/>, children: [
                    { path: "jsonplaceholder", element: <CommentContainer/>},
                    { path: "dummyjson", element: <DummyCommentsContainer limit={100}/>}
                ]},
        ]}
]);
