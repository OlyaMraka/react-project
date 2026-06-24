import type {FC} from "react";
import {Link} from "react-router-dom";
import "./main-menu-component.css";

const MainMenuComponent: FC = () => {
    return (
        <div className="main-menu">
            <ul className="main-menu-list">
                <li><Link to={'users'}>Users</Link></li>
                <li><Link to={'posts'}>Posts</Link></li>
                <li><Link to={'comments'}>Comments</Link></li>
            </ul>
        </div>
    );
};

export default MainMenuComponent;
