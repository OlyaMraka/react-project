import type {FC} from "react";
import type {ToDo} from "../../../types/types.ts";
import "./to-do-component.css";

const ToDoComponent: FC<ToDo> = ({toDoTask}) => {
    return (
        <div className="todo-card">
            <h2 className="todo-title">Title: {toDoTask.title}</h2>
            <h3 className="todo-userId">User Id: {toDoTask.userId}</h3>
            <h3 className="todo-id">Id: {toDoTask.id}</h3>
            <h3 className="todo-completed">Completed: {toDoTask.completed ? "Yes" : "No"}</h3>
        </div>
    );
};

export default ToDoComponent;
