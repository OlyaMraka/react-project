import type {FC} from "react";
import {Link} from "react-router-dom";
import "./main-menu.css";

const MainMenu: FC = () => {
    return (
        <div className="main-menu-block">
            <ul>
                <li><Link to={"/cars"}>Get Cars</Link></li>
                <li><Link to={"/create-car"}>Create Car</Link></li>
            </ul>
        </div>
    );
};

export default MainMenu;
