import { type FC } from "react";
import "./dummy-user-component.css";
import type {DummyUserComponentProps} from "../../../types/DummyUserTypes.ts";
import { useNavigate } from "react-router-dom";
import "./dummy-user-component.css";

const DummyUserComponent: FC<DummyUserComponentProps> = ({ user }) => {
    const navigate = useNavigate();

    const handleGetProducts = () => {
        navigate('products/' + user.id);
    }

    return (
        <div className="dummy-user-block">

            <h3 className="dummy-user-id">Id: {user.id}</h3>
            <h2 className="dummy-user-name">
                {user.firstName} {user.lastName}
            </h2>
            <button onClick={handleGetProducts}>Get Pruducts</button>

        </div>
    );
};

export default DummyUserComponent;
