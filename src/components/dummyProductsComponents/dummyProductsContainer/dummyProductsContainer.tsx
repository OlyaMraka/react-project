import {type FC, useEffect, useState} from "react";
import type { DummyContainerComponentProps, DummyProductsResponse } from "../../../types/types.ts";
import {getDummyProductList} from "../../../services/api.service.ts";
import DummyProductComponent from "../dummyProductComponent/DummyProductComponent.tsx";
import "./dummy-products-container.css";

const DummyProductContainer: FC<DummyContainerComponentProps> = ({limit}) => {
    const [dummyResponse, setDummyResponse] = useState<DummyProductsResponse>();

    useEffect(() => {
        getDummyProductList(limit).then(response => {
            setDummyResponse(response)
        });
    }, [])

    return (
        <div className="dummy-product-wrapper">
            <h2>Dummy Json ProductList</h2>
            <div className="additional-info-block">
                <h3 className="product-total">Total: {dummyResponse?.total}</h3>
                <h3 className="product-skip">Skip: {dummyResponse?.skip}</h3>
                <h3 className="product-limit">Limit: {dummyResponse?.limit}</h3>
            </div>
            <div className="dummy-product-list-container">
                {
                    dummyResponse && dummyResponse.products.map((product, index) =>
                        (<DummyProductComponent key={index} product={product}/>))
                }
            </div>
        </div>
    );
};

export default DummyProductContainer;
