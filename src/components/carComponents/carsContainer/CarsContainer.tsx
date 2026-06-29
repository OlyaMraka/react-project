import {type FC, useEffect, useState} from "react";
import type {Car} from "../../../types/CarTypes.ts";
import {GetAllCars} from "../../../services/api.service.ts";
import CarComponent from "../carComponent/CarComponent.tsx";
import "./cars-container.css";

const CarsContainer: FC = () => {
    const [cars, setCars] = useState<Car[]>([]);

    useEffect(() => {
        GetAllCars().then(response => {
            setCars(response);
        })
    }, []);

    return (
        <div className="cars-container">
            {
                cars.map((car) => (<CarComponent key={car.id} car={car}/>))
            }
        </div>
    );
};

export default CarsContainer;
