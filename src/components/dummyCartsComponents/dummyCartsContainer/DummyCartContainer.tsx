import {type FC, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {getDummyCartList} from "../../../services/api.service.ts";
import type {ProductResponseData} from "../../../types/DummyCartTypes.ts";
import DummyCartComponent from "../dummyCartComponent/DummyCartComponent.tsx";
import "./dummy-cart-container.css";

const DummyCartContainer: FC = () => {
    const { userId } = useParams();
    const [dummyData, setDummyData] = useState<ProductResponseData>();

    useEffect(() => {
        if(userId)
        {
            getDummyCartList(+userId).then(response => {
                setDummyData(response);
            })
        }
    }, [userId]);

    return (
        <div className="cart-container">
            <h2>User id: {userId}</h2>
            <div className="c-block">
                {
                    dummyData && dummyData.carts.map(cart => (<DummyCartComponent key={cart.id} cart={cart}/>))
                }
            </div>
        </div>
    );
};

export default DummyCartContainer;
