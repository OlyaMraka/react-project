import type {FC} from "react";
import PaginationComponent from "../components/paginationComponent/PaginationComponent.tsx";
import DummyUsersContainer from "../components/dummyUserComponents/dummyUsersContainer/DummyUsersContainer.tsx";

const MainLayout: FC = () => {
    return (
        <div className="main-layout">
            <PaginationComponent/>
            <DummyUsersContainer/>
        </div>
    );
};

export default MainLayout;