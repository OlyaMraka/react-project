import {type FC, useEffect, useState} from "react";
import type {UserType} from "../../../types/UserTypes.ts";
import {getUserList} from "../../../services/api.service.ts";
import UserComponent from "../userComponent/UserComponent.tsx";
import "./users-container.css";

const UsersContainer: FC = () => {
    const [usersList, setUsersList] = useState<UserType[]>([]);

    useEffect(() => {
        getUserList().then(response => {
            setUsersList(response);
        })
    }, []);

    return (
        <div className="users-container">
            <h2>Source: Json Placeholder</h2>
            <div className="u-container">
                {
                    usersList.map((user) => (<UserComponent key={user.id} user={user}/>))
                }
            </div>
        </div>
    );
};

export default UsersContainer;