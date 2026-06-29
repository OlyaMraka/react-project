import * as axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "http://bigbird.space/carsAPI/v1",
    headers: { 'Content-Type': 'application/json' },
});
