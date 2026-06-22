import {type FC, useEffect, useState} from "react";
import type { DummyContainerComponentProps, DummyPostResponse } from "../../../types/types.ts";
import {getDummyPostList} from "../../../services/api.service.ts";
import DummyPostComponent from "../dummyPostComponent/DummyPostComponent.tsx";
import "./dummy-post-container.css";

const DummyPostsContainer: FC<DummyContainerComponentProps> = ({limit}) => {
    const [dummyResponse, setDummyResponse] = useState<DummyPostResponse>();

    useEffect(() => {
        getDummyPostList(limit).then(response => {
            setDummyResponse(response)
        });
    }, [])

    return (
        <div className="dummy-post-wrapper">
            <h2>Dummy Json PostsList</h2>
            <div className="additional-info-block">
                <h3 className="post-total">Total: {dummyResponse?.total}</h3>
                <h3 className="post-skip">Skip: {dummyResponse?.skip}</h3>
                <h3 className="post-limit">Limit: {dummyResponse?.limit}</h3>
            </div>
            <div className="dummy-post-list-container">
                {
                    dummyResponse && dummyResponse.posts.map((post, index) =>
                        (<DummyPostComponent key={index} post={post}/>))
                }
            </div>
        </div>
    );
};

export default DummyPostsContainer;
