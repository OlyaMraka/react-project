import type {
    Comment,
    DummyCommentsResponse,
    DummyPostResponse, DummyProductsResponse,
    DummyToDoResponse,
    Post,
    ToDoTask
} from "../types/types.ts";

const jsonPlaceholderUrl = import.meta.env.VITE_API_JSONPLACEHOLDER_URL;
const dummyJsonUrl = import.meta.env.VITE_API_DUMMYJSON_URL;

export const getToDoList = async (): Promise<ToDoTask[]> => {
    return await fetch(jsonPlaceholderUrl + "/todos")
        .then(res => res.json());
}

export const getPostList = async (): Promise<Post[]> => {
    return await fetch(jsonPlaceholderUrl + "/posts")
        .then(res => res.json());
}

export const getCommentList = async (): Promise<Comment[]> => {
    return await fetch(jsonPlaceholderUrl + "/comments")
        .then(res => res.json());
}

export const getDummyToDoList = async (limit: number): Promise<DummyToDoResponse> => {
    return await fetch(dummyJsonUrl + `/todos?limit=${limit}`)
        .then(res => res.json());
}

export const getDummyPostList = async (limit: number): Promise<DummyPostResponse> => {
    return await fetch(dummyJsonUrl + `/posts?limit=${limit}`)
        .then(res => res.json());
}

export const getDummyCommentList = async (limit: number): Promise<DummyCommentsResponse> => {
    return await fetch(dummyJsonUrl + `/comments?limit=${limit}`)
        .then(res => res.json());
}

export const getDummyProductList = async (limit: number): Promise<DummyProductsResponse> => {
    return await fetch(dummyJsonUrl + `/products?limit=${limit}`)
        .then(res => res.json());
}
