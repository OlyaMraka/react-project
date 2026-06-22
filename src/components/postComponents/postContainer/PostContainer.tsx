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
            {
                postList.map((post, index) => (<PostComponent key={index} post={post}/>) )
            }
        </div>
    );
};

export default PostContainer;