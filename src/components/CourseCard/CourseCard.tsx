import type {FC} from "react";
import type {CourseType} from "../../types/types.ts";
import "./course-card.css";

const CourseCardComponent: FC<CourseType> = ({title, monthDuration, hourDuration, modules}) => {
    return <div className="course-card-block">
        <h2 className="course-title">Title: {title}</h2>
        <h3 className="course-monthDuration">MonthDuration: {monthDuration}</h3>
        <h3 className="course-hourDuration">HourDuration: {hourDuration}</h3>
        <div className="modules-block">
            {
                modules.map((module, index) => (<p key={index} className="module-title">{module}</p>))
            }
        </div>
    </div>
}

export default CourseCardComponent;
