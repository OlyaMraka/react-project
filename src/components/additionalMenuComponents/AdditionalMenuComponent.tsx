import type {FC} from "react";
import {Link} from "react-router-dom";
import "./additional-menu-component.css";

const AdditionalMenuComponent: FC = () => {
    return (
        <div className="additional-menu">
            <ul className="additional-menu-list">
                <li><Link to={'jsonplaceholder'}>JsonPlaceholder</Link></li>
                <li><Link to={'dummyjson'}>DummyJson</Link></li>
            </ul>
        </div>
    );
};

export default AdditionalMenuComponent;
