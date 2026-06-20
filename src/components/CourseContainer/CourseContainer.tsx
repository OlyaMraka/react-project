import type {FC} from "react";
import type {CourseContainer} from "../../types/types.ts";
import CourseCard from "../CourseCard/CourseCard.tsx";
import "./course-container.css";

const CourseContainerComponent: FC<CourseContainer> = ({courses}) => {
    return <div className="course-container">
        {
            courses.map((course, index) => (
                <CourseCard key={index}
                            title={course.title}
                            monthDuration={course.monthDuration}
                            hourDuration={course.hourDuration}
                            modules={course.modules}/>))
        }
    </div>
}

export default CourseContainerComponent;
