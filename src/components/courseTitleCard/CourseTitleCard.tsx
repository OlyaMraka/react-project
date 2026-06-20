import type {FC} from "react";
import type {CourseTitleCardType} from "../../types/types.ts";
import "./course-title-card.css";

const CourseTitleCard: FC<CourseTitleCardType> = ({title}) => {
    return (
        <div className="course-title-block">{title}</div>
    )
}

export default CourseTitleCard;
