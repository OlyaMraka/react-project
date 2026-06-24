import {type FC, useEffect, useState} from "react";
import type {Post} from "../../../types/types.ts";
import {getPostList} from "../../../services/api.service.ts";
import PostComponent from "../postComponent/PostComponent.tsx";
import "./post-container.css";

const PostContainer: FC = () => {

    const [postList, setPostList] = useState<Post[]>([]);

    useEffect(() => {
        getPostList().then(response => {
            setPostList(response)
        })
    }, []);

    return (
        <div className="post-container">
            <h2>Source: Json Placeholder</h2>
            <div className="p-container">
                {
                    postList.map((post) => (<PostComponent key={post.id} post={post}/>) )
                }
            </div>
        </div>
    );
};

export default PostContainer;