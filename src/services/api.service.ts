import type {Car} from "../types/CarTypes.ts";
import {axiosInstance} from "./axios.instance.ts";

export const GetAllCars = async (): Promise<Car[]> => {
    const { data } = await axiosInstance.get<Car[]>("/cars");
    return data;
}

export const SaveCar = async (car: Car): Promise<Car> => {
    const {data} = await axiosInstance.post("/cars", car);
    return data;
}