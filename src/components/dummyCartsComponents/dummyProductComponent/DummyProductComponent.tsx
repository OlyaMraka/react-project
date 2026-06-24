import type {DummyProductComponentProps} from "../../../types/DummyCartTypes.ts";
import type {FC} from "react";
import "./dummy-product-component.css";

const ProductComponent: FC<DummyProductComponentProps> = ({product}) => {
    return (
        <div className="product-block">
            <img src={product.thumbnail} alt={product.title}/>
            <div className="main-product-info">
                <span className="product-id">Id: {product.id}</span>
                <span className="product-title">Title: {product.title}</span>
                <span className="product-price">Price: {product.price}</span>
                <span className="product-discountedTotal">Discounted Total: {product.discountedTotal}</span>
                <span className="product-discountPercentage">Discount Percentage: {product.discountPercentage}</span>
                <span className="product-quantity">Quantity: {product.quantity}</span>
                <span className="product-total">Total: {product.total}</span>
            </div>
        </div>
    );
};

export default ProductComponent;
