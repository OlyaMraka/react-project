import type {FC} from "react";
import type {CarComponentProps} from "../../../types/CarTypes.ts";
import "./car-component.css";

const CarComponent: FC<CarComponentProps> = ({car}) => {
    return (
        <div className="car-info-block">
            <span className="car-id">Id: {car.id}</span>
            <span className="car-brand">Brand: {car.brand}</span>
            <span className="car-price">Price: {car.price}</span>
            <span className="car-year">Year: {car.year}</span>
        </div>
    );
};

export default CarComponent;
