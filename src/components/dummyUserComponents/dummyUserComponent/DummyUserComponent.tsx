import { type FC } from "react";
import "./dummy-user-component.css";
import type {DummyUserComponentProps} from "../../../types/DummyUserTypes.ts";

const DummyUserComponent: FC<DummyUserComponentProps> = ({ user }) => {
    return (
        <div className="dummy-user-block">

            <div className="dummy-user-main-info">
                <img
                    src={user.image}
                    alt={`${user.firstName} ${user.lastName}`}
                    className="dummy-user-image"
                />

                <h3 className="dummy-user-id">Id: {user.id}</h3>

                <h2 className="dummy-user-name">
                    {user.firstName} {user.lastName}
                </h2>

                <h4 className="dummy-user-role">
                    Role: {user.role}
                </h4>

                <p>Username: {user.username}</p>
                <p>Age: {user.age}</p>
                <p>Gender: {user.gender}</p>
                <p>Birth date: {user.birthDate}</p>
                <p>Blood group: {user.bloodGroup}</p>
            </div>

            <div className="dummy-user-contact-info">
                <h3>Contact</h3>

                <p>Email: {user.email}</p>
                <p>Phone: {user.phone}</p>
                <p>IP: {user.ip}</p>
                <p>MAC: {user.macAddress}</p>

                <h3>Address</h3>

                <p>{user.address.address}</p>
                <p>{user.address.city}</p>
                <p>{user.address.state}</p>
                <p>{user.address.country}</p>
                <p>{user.address.postalCode}</p>
            </div>

            <div className="dummy-user-company-info">
                <h3>Company</h3>

                <p>Name: {user.company.name}</p>
                <p>Department: {user.company.department}</p>
                <p>Position: {user.company.title}</p>

                <h3>University</h3>

                <p>{user.university}</p>

                <h3>Physical</h3>

                <p>Height: {user.height} cm</p>
                <p>Weight: {user.weight} kg</p>
                <p>Eyes: {user.eyeColor}</p>
                <p>
                    Hair: {user.hair.color} ({user.hair.type})
                </p>
            </div>

            <div className="dummy-user-additional-data">
                <div className="dummy-user-bank-info">
                    <h3>Bank</h3>

                    <p>Type: {user.bank.cardType}</p>
                    <p>Currency: {user.bank.currency}</p>
                    <p>Expires: {user.bank.cardExpire}</p>
                </div>

                <div className="dummy-user-crypto-info">
                    <h3>Crypto</h3>

                    <p>Coin: {user.crypto.coin}</p>
                    <p>Network: {user.crypto.network}</p>
                </div>
            </div>

        </div>
    );
};

export default DummyUserComponent;
