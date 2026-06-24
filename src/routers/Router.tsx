import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
import CartLayout from "../layouts/CartLayout.tsx";

export const router = createBrowserRouter([
    { path: "/", element: <MainLayout/> },
    { path: "/products/:userId", element: <CartLayout/> }
]);
