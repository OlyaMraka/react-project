import type {
    Comment,
    DummyCommentsResponse,
    DummyPostResponse,
    Post
} from "../types/types.ts";
import type {UserType} from "../types/UserTypes.ts";
import type {DummyUsersResponse} from "../types/DummyUserTypes.ts";

const jsonPlaceholderUrl = import.meta.env.VITE_API_JSONPLACEHOLDER_URL;
const dummyJsonUrl = import.meta.env.VITE_API_DUMMYJSON_URL;

export const getPostList = async (): Promise<Post[]> => {
    return await fetch(jsonPlaceholderUrl + "/posts")
        .then(res => res.json());
}

export const getCommentList = async (): Promise<Comment[]> => {
    return await fetch(jsonPlaceholderUrl + "/comments")
        .then(res => res.json());
}

export const getUserList = async (): Promise<UserType[]> => {
    return await fetch(jsonPlaceholderUrl + "/users")
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

export const getDummyUserList = async (limit: number): Promise<DummyUsersResponse> => {
    return await fetch(dummyJsonUrl + `/users?limit=${limit}`)
        .then(res => res.json());
}
