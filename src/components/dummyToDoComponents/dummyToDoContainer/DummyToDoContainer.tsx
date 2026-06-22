import {type FC, useEffect, useState} from "react";
import type {
    DummyContainerComponentProps,
    DummyToDoResponse
} from "../../../types/types.ts";
import {getDummyToDoList} from "../../../services/api.service.ts";
import DummyToDoComponent from "../dummyToDoComponent/dummyToDoComponent.tsx";
import "./dummy-to-do-container.css";

const DummyToDoContainer: FC<DummyContainerComponentProps> = ({limit}) => {
    const [dummyResponse, setDummyResponse] = useState<DummyToDoResponse>();

    useEffect(() => {
        getDummyToDoList(limit).then(response => {
            setDummyResponse(response)
        });
    }, [])

    return (
        <div className="dummy-todo-wrapper">
            <h2>Dummy Json ToDoList</h2>
            <div className="additional-info-block">
                <h3 className="todo-total">Total: {dummyResponse?.total}</h3>
                <h3 className="todo-skip">Skip: {dummyResponse?.skip}</h3>
                <h3 className="todo-limit">Limit: {dummyResponse?.limit}</h3>
            </div>
            <div className="dummy-to-do-list-container">
                {
                    dummyResponse && dummyResponse.todos.map((toDoTask, index) =>
                        (<DummyToDoComponent key={index} toDoTask={toDoTask}/>))
                }
            </div>
        </div>
    );
};

export default DummyToDoContainer;
