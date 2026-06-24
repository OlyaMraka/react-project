import type {DummyUsersResponse} from "../types/DummyUserTypes.ts";
import type {ProductResponseData} from "../types/DummyCartTypes.ts";

const dummyJsonUrl = import.meta.env.VITE_API_DUMMYJSON_URL;


export const getDummyUserList = async (limit: number): Promise<DummyUsersResponse> => {
    return await fetch(dummyJsonUrl + `/users?limit=${limit}`)
        .then(res => res.json());
}

export const getDummyCartList = async (userId: number): Promise<ProductResponseData> => {
    return await fetch(dummyJsonUrl + `/users/${userId}/carts`)
        .then(res => res.json());
}
