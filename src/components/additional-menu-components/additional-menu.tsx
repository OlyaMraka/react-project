import type {FC} from "react";
import {Link} from "react-router-dom";
import "./additional-menu.css";

const AdditionalMenuComponent: FC = () => {
    return (
        <div className="additional-menu-component">
            <ul className="additional-menu-block">
                <li><Link to={'jsonplaceholder'}>Jsonplaceholder</Link></li>
                <li><Link to={'dummyjson'}>Dummy Json</Link></li>
            </ul>
        </div>
    );
};

export default AdditionalMenuComponent;
