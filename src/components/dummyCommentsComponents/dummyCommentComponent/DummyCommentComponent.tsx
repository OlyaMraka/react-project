import type {FC} from "react";
import type {DummyCommentComponentProps} from "../../../types/types.ts";
import "./dummy-comment-component.css";

const DummyCommentComponent: FC<DummyCommentComponentProps> = ({comment}) => {
    return (
        <div className="dummy-component-block">
            <div className="comment-header">
                <h3 className="dummy-component-id">Id: {comment.id}</h3>
                <h3 className="dummy-component-postid">Post id: {comment.postId}</h3>
                <h3 className="dummy-component-likes">Likes: {comment.likes}</h3>
            </div>
            <div className="author-info">
                <h3 className="comment-user-id">User id: {comment.user.id}</h3>
                <h3 className="comment-user-username">Username: {comment.user.username}</h3>
                <h3 className="comment-user-fullname">FullName: {comment.user.fullName}</h3>
            </div>
            <p className="dummy-comment-body">{comment.body}</p>
        </div>
    );
};

export default DummyCommentComponent;
