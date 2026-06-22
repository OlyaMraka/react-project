import type {FC} from "react";
import type {CommentComponentProps} from "../../../types/types.ts";
import "./comment-component.css";

const CommentComponent: FC<CommentComponentProps> = ({comment}) => {
    return (
        <div className="comment-block">
            <h2 className="block-title">Comment</h2>
            <div className="comment-ids">
                <h3>Post id: {comment.postId}</h3>
                <h3>Id: {comment.id}</h3>
            </div>
            <div className="comment-author">
                <h3>Name: {comment.name}</h3>
                <h3>Email: {comment.email}</h3>
            </div>
            <p className="comment-content">
                {comment.body}
            </p>
        </div>
    );
};

export default CommentComponent;
