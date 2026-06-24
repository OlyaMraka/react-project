import type {FC} from "react";
import DummyCartContainer from "../components/dummyCartsComponents/dummyCartsContainer/DummyCartContainer.tsx";

const CartLayout: FC = () => {
    return (
        <div className="main-layout">
            <DummyCartContainer/>
        </div>
    );
};

export default CartLayout;
