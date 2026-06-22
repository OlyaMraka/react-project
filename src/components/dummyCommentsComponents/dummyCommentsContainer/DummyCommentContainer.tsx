import {type FC, useEffect, useState} from "react";
import type {DummyCommentsResponse, DummyContainerComponentProps} from "../../../types/types.ts";
import {getDummyCommentList} from "../../../services/api.service.ts";
import DummyCommentComponent from "../dummyCommentComponent/DummyCommentComponent.tsx";
import "./dummy-comment-container.css";

const DummyCommentsContainer: FC<DummyContainerComponentProps> = ({limit}) => {
    const [dummyResponse, setDummyResponse] = useState<DummyCommentsResponse>();

    useEffect(() => {
        getDummyCommentList(limit).then(response => {
            setDummyResponse(response)
        });
    }, [])

    return (
        <div className="dummy-comment-wrapper">
            <h2>Dummy Json commentsList</h2>
            <div className="additional-info-block">
                <h3 className="comment-total">Total: {dummyResponse?.total}</h3>
                <h3 className="comment-skip">Skip: {dummyResponse?.skip}</h3>
                <h3 className="comment-limit">Limit: {dummyResponse?.limit}</h3>
            </div>
            <div className="dummy-comment-list-container">
                {
                    dummyResponse && dummyResponse.comments.map((comment, index) =>
                        (<DummyCommentComponent key={index} comment={comment}/>))
                }
            </div>
        </div>
    );
};

export default DummyCommentsContainer;
