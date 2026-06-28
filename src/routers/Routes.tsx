import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";

const router = createBrowserRouter([
    { path: "/", element: <MainLayout/> }
]);

export default router;