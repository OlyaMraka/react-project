import {type FC, useEffect, useState} from "react";
import type {Comment} from "../../../types/types.ts";
import {getCommentList} from "../../../services/api.service.ts";
import CommentComponent from "../commentComponent/CommentComponent.tsx";
import "./comment-container.css";

const CommentContainer: FC = () => {

    const [commentList, setCommentList] = useState<Comment[]>([]);

    useEffect(() => {
        getCommentList().then(response => {
            setCommentList(response);
        })
    }, []);

    return (
        <div className="comment-container">
            {
                commentList.map((comment, index) =>
                    (<CommentComponent key={index} comment={comment}/>))
            }
        </div>
    );
};

export default CommentContainer;
