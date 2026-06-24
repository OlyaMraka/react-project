import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
import DummyCartContainer from "../components/dummyCartsComponents/dummyCartsContainer/DummyCartContainer.tsx";

export const router = createBrowserRouter([
    { path: "/", element: <MainLayout/>, children: [
            { path: "products/:userId", element: <DummyCartContainer/> }
        ]}
]);
