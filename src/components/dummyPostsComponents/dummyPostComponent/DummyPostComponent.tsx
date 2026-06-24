import {type FC} from "react";
import type {DummyPostComponentProps} from "../../../types/types.ts";
import "./dummy-post-component.css";

const DummyPostComponent: FC<DummyPostComponentProps> = ({post}) => {
    return (
        <div className="dummy-post-block">
            <div className="dummy-post-main-info">
                <h3 className="dummy-post-id">Id: {post.id}</h3>
                <h3 className="dummy-post-userid">User id: {post.userId}</h3>
                <h2 className="dummy-post-title">Title: {post.title}</h2>
                <p className="dummy-post-body">Body: {post.body}</p>
            </div>
            <div className="dummy-post-tagscontainer">
                {
                    post.tags.map((postTag, index) =>
                        (<span key={index} className="dummy-post-tag">{postTag}</span>))
                }
            </div>
            <div className="dummy-post-additional-data">
                <div className="dummy-post-reactions">
                    <h4>Likes: {post.reactions.likes}</h4>
                    <h4>Dislikes: {post.reactions.dislikes}</h4>
                </div>
                <h4>Views: {post.views}</h4>
            </div>
        </div>
    );
};

export default DummyPostComponent;
