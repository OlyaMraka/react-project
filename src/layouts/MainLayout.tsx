import type {FC} from "react";
import DummyUserContainer from "../components/dummyUserComponents/dummyUsersContainer/DummyUsersContainer.tsx";

const MainLayout: FC = () => {
    return (
        <div className="main-layout">
            <DummyUserContainer limit={20}/>
        </div>
    );
};

export default MainLayout;
