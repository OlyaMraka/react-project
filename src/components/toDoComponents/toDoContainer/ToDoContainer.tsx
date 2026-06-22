import {type FC, useEffect, useState} from "react";
import type {ToDoTask} from "../../../types/types.ts";
import {getToDoList} from "../../../services/api.service.ts";
import ToDoComponent from "../toDoComponent/ToDoComponent.tsx";
import "./to-do-container.css";

const ToDoContainer: FC = () => {
    const [toDoList, setToDoList] = useState<ToDoTask[]>();

    useEffect(() => {
        getToDoList().then(response => {
            setToDoList(response)
        });
    }, [])

    return (
        <div className="to-do-list-container">
            {
                toDoList && toDoList.map((toDoTask, index) =>
                    (<ToDoComponent key={index} toDoTask={toDoTask}/>))
            }
        </div>
    );
};

export default ToDoContainer;
