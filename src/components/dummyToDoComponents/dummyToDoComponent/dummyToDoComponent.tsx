import type {FC} from "react";
import type {DummyToDoTaskComponentProps} from "../../../types/types.ts";
import "./dummy-to-do-component.css";

const DummyToDoComponent: FC<DummyToDoTaskComponentProps> = ({toDoTask}) => {
    return (
        <div className="dummy-todo-card">
            <h2 className="dummy-todo-title">Title: {toDoTask.todo}</h2>
            <h3 className="dummy-todo-userId">User Id: {toDoTask.userId}</h3>
            <h3 className="dummy-todo-id">Id: {toDoTask.id}</h3>
            <h3 className="dummy-todo-completed">Completed: {toDoTask.completed ? "Yes" : "No"}</h3>
        </div>
    );
};

export default DummyToDoComponent;
