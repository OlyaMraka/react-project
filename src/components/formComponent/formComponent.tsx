import {type FC, useState} from "react";
import {useForm} from "react-hook-form";
import type {Car, MyFormProps} from "../../types/CarTypes.ts";
import {SaveCar} from "../../services/api.service.ts";
import { joiResolver } from "@hookform/resolvers/joi";
import {CarValidator} from "../../validators/CarValidator.ts";
import "./form-component.css";

const FormComponent: FC = () => {

    const { handleSubmit, register, formState: {errors, isValid}, reset } = useForm<MyFormProps>({
        mode: "all",
        resolver: joiResolver(CarValidator),
    });

    const [saveResult, setSaveResult] = useState<Car>();

    const submitHandler = (formData: MyFormProps) => {
        const car = formData as Car;
        SaveCar(car).then(response => {
            setSaveResult(response);
            reset();
        });
    }

    return (
        <div className="form-block">
            <h2 className="form-title">Create your car</h2>
            <div className="form-row">
                <form onSubmit={handleSubmit(submitHandler)} className="form-container">
                    <label>
                        Brand:
                        <input type="text" {...register("brand")}/>
                        { errors.brand && <div className="error-message">{errors.brand.message}</div> }
                    </label>

                    <label>
                        Price:
                        <input type="number" {...register("price")}/>
                        { errors.price && <div className="error-message">{errors.price.message}</div> }
                    </label>

                    <label>
                        Year:
                        <input type="number" {...register("year")}/>
                        { errors.year && <div className="error-message">{errors.year.message}</div> }
                    </label>
                    <button disabled={!isValid}>Save</button>
                </form>

                {
                    saveResult &&

                    <div className="save-result-block">
                        <h2>Your car saved successfully</h2>
                        <div className="new-car-info-block">
                            <span>Id: {saveResult.id}</span>
                            <span>Brand: {saveResult.brand}</span>
                            <span>Price: {saveResult.price}</span>
                            <span>Year: {saveResult.year}</span>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default FormComponent;
