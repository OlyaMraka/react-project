import type {FC} from "react";
import type {DummyCartComponentProps} from "../../../types/DummyCartTypes.ts";
import DummyProductComponent from "../dummyProductComponent/DummyProductComponent.tsx";
import "./dummy-cart-component.css";

const DummyCartComponent: FC<DummyCartComponentProps> = ({cart}) => {
    return (
        <div className="cart-block">
            <div className="main-cart-info">
                <span className="cart-id">Id: {cart.id}</span>
                <span className="cart-userid">User id: {cart.userId}</span>
                <span className="cart-total">Total: {cart.total}</span>
                <span className="cart-discounted-total">Discounted Total: {cart.discountedTotal}</span>
                <span className="cart-total-products">Total Products: {cart.totalProducts}</span>
                <span className="cart-total-quantity">Total quantity: {cart.totalQuantity}</span>
            </div>

            <div className="products-container">
                {
                    cart.products.map((product) =>
                        (<DummyProductComponent key={product.id} product={product}/>))
                }
            </div>
        </div>
    );
};

export default DummyCartComponent;
