import type {UserComponentProps} from "../../../types/UserTypes.ts";
import type {FC} from "react";
import "./user-component.css";

const UserComponent: FC<UserComponentProps> = ({user}) => {
    return (
        <div className="user-info-block">
            <div className="user-main-info-block">
                <h2>Main info</h2>
                <span className="user-id">Id: {user.id}</span>
                <span className="user-name">Name: {user.name}</span>
                <span className="user-username">Username: {user.username}</span>
                <span className="user-phone">Phone: {user.phone}</span>
                <span className="user-email">Email: {user.email}</span>
                <span className="user-website">Website: {user.website}</span>
            </div>
            <div className="user-address-info">
                <h2>Address</h2>
                <span className="address-street">Street: {user.address.street}</span>
                <span className="address-suite">Suite: {user.address.suite}</span>
                <span className="address-city">City: {user.address.city}</span>
                <span className="address-zipcode">Zipcode: {user.address.zipcode}</span>
            </div>
            <div className="user-company-info">
                <h2>Company</h2>
                <span className="company-name">Name: {user.company.name}</span>
                <span className="company-catch-phrase">Catch phrase: {user.company.catchPhrase}</span>
                <span className="company-bs">Bs: {user.company.bs}</span>
            </div>
        </div>
    );
}

export default UserComponent;