import type {CourseAndDurationCardType} from "../../types/types.ts";
import type {FC} from "react";
import "./course-and-duration.css";

const CourseAndDurationCard: FC<CourseAndDurationCardType> = ({title, monthDuration}) => {
    return (
        <div className="course-and-duration-block">
            <h4>{title} - {monthDuration}</h4>
        </div>
    );
};

export default CourseAndDurationCard;
