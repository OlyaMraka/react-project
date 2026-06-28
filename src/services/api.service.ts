import type {DummyUsersResponse} from "../types/DummyUserTypes.ts";

const dummyJsonUrl = import.meta.env.VITE_API_DUMMYJSON_URL;

export const getDummyUserList = async (skip: number): Promise<DummyUsersResponse> => {
    return await fetch(dummyJsonUrl + `/users?skip=${skip}`)
        .then(res => res.json());
}
