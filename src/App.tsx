import './App.css';
import {coursesTitleArray, coursesAndDurationArray, simpsons, coursesArray} from "./data/mockData.ts";
import FamilyComponent from "./components/familyComponent/FamilyComponent.tsx";
import CourseContainerComponent from "./components/CourseContainer/CourseContainer.tsx";
import CourseTitleCard from "./components/courseTitleCard/CourseTitleCard.tsx"
import CourseAndDurationCard from "./components/CourseAndDurationCard/CourseAndDurationCard.tsx";

function App() {

  return (
      <>
        <h2>First Task</h2>
        {
          coursesTitleArray.map((title, index) => <CourseTitleCard key={index} title={title}/>)
        }
        <h2>Second Task</h2>
        {
          coursesAndDurationArray.map((object, index) =>
              <CourseAndDurationCard key={index} title={object.title} monthDuration={object.monthDuration}/>)
        }
        <h2>Third Task</h2>
          <FamilyComponent simpsons={simpsons}/>

        <h2>Fourth Task</h2>
          <CourseContainerComponent courses={coursesArray}/>
      </>
  )
}

export default App
