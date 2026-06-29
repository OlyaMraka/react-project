import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
import CarsContainer from "../components/carComponents/carsContainer/CarsContainer.tsx";
import FormComponent from "../components/formComponent/formComponent.tsx";

export const router = createBrowserRouter([
    { path: "/", element: <MainLayout/>, children: [
            {path: "/cars", element: <CarsContainer/>},
            {path: "/create-car", element: <FormComponent/>}
        ]}
])