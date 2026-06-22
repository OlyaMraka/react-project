import type {FC} from "react";
import type {DummyReviewComponentProps} from "../../../types/types.ts";
import "./dummy-review-component.css";

const DummyReviewComponent: FC<DummyReviewComponentProps> = ({review}) => {
    return (
        <div className="review-block">
            <h2 className="user-info">{review.reviewerName}, {review.reviewerEmail}</h2>
            <p className="review-content">{review.comment}</p>
            <div className="review-additional-info">
                <span className="review-rating">{review.rating}</span>
                <span className="review-date">{review.date}</span>
            </div>
        </div>
    );
};

export default DummyReviewComponent;
