import type {FC} from "react";
import type {PostComponentProps} from "../../../types/types.ts";
import "./post-component.css";

const PostComponent: FC<PostComponentProps> = ({post}) => {
    return (
        <div className="post-block">
            <h2 className="post-title">{post.title}</h2>
            <h3 className="post-userId">User id: {post.userId}</h3>
            <h3 className="post-id">Id: {post.id}</h3>
            <p className="post-body">Body: {post.body}</p>
        </div>
    );
};

export default PostComponent;
