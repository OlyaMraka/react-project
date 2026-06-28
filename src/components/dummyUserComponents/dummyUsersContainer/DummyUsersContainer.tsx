import {type FC, useEffect, useState} from "react";
import type {DummyUsersResponse} from "../../../types/DummyUserTypes.ts";
import {getDummyUserList} from "../../../services/api.service.ts";
import DummyUserComponent from "../dummyUserComponent/DummyUserComponent.tsx";
import "./dummy-users-container.css";
import {useSearchParams} from "react-router-dom";

const DummyUserContainer: FC = () => {

    const [dummyData, setDummyData] = useState<DummyUsersResponse>();
    const [query] = useSearchParams()

    useEffect(() => {
        const skipValue = query.get("skip");

        getDummyUserList(skipValue ? +skipValue : 0).then(response => {
            setDummyData(response);
        })
    }, [query]);

    return (
        <div className="dummy-users">
            <h2>Source: Dummy Json</h2>
            <div className="quantity-info">
                <span>Total: {dummyData?.total}</span>
                <span>Skip: {dummyData?.skip}</span>
                <span>Limit: {dummyData?.limit}</span>
            </div>
            <div className="dummy-users-container">
                {
                    dummyData && dummyData.users.map((user) => (<DummyUserComponent key={user.id} user={user}/>))
                }
            </div>
        </div>
    );
};

export default DummyUserContainer;
