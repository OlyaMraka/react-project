import type {FC} from "react";
import {Link} from "react-router-dom";
import "./menu-component.css";

const MenuComponent: FC = () => {
    return (
        <div className="menu-block">
            <ul className="menu-list">
                <li><Link to={'users'}>Users</Link></li>
                <li><Link to={'posts'}>Posts</Link></li>
                <li><Link to={'comments'}>Comments</Link></li>
                <li><Link to={'products'}>Products</Link></li>
            </ul>
        </div>
    );
};

export default MenuComponent;
