import type {FC} from "react";
import type {ProductComponentProps} from "../../../types/types.ts";
import DummyReviewComponent from "../dummyReviewComponent/DummyReviewComponent.tsx";
import "./dummy-product-component.css";

const DummyProductComponent: FC<ProductComponentProps> = ({product}) => {
    return (
        <div className="product-block">
            <div className="product-main-info-block">
                <div className="product-info">
                    <span className="product-id">Id: {product.id}</span>
                    <span className="product-title">Title: {product.title}</span>
                    <span className="product-description">Description: {product.description}</span>
                    <span className="product-category">Category: {product.category}</span>
                    <span className="product-price">Price: {product.price}</span>
                    <span className="product-discount-percentage">Discount percentage: {product.discountPercentage}</span>
                    <span className="product-rating">Rating: {product.rating}</span>
                    <span className="product-stock">Stock: {product.stock}</span>
                    <div className="product-tags">
                        {
                            product.tags.map((tag, index) =>
                                (<span key={index} className="product-tag">{tag}</span>))
                        }
                    </div>
                    <span className="product-brand">Brand: {product.brand ? product.brand : "-"}</span>
                    <span className="product-sku">Sku: {product.sku}</span>
                    <span className="product-weight">Weight: {product.weight}</span>
                    <div className="product-dimensions">
                        <span className="product-width">Width: {product.dimensions.width}</span>
                        <span className="product-height">Height: {product.dimensions.height}</span>
                        <span className="product-depth">Depth: {product.dimensions.depth}</span>
                    </div>
                    <span className="product-warranty-information">Warranty Information: {product.warrantyInformation}</span>
                    <span className="product-shipping-information">Shipping Information: {product.shippingInformation}</span>
                    <span className="product-availability-status">Availability Status: {product.availabilityStatus}</span>
                    <span className="product-return-policy">Return Policy: {product.returnPolicy}</span>
                    <span className="product-minimum-order-quantity">Minimum Order Quantity: {product.minimumOrderQuantity}</span>
                    <div className="product-meta-block">
                        <div className="product-meta-info-block">
                            <span className="product-created-at">Created At: {product.meta.createdAt}</span>
                            <span className="product-updated-at">Updated At: {product.returnPolicy}</span>
                            <span className="product-barcode">Barcode: {product.meta.barcode}</span>
                        </div>
                        <img src={product.meta.qrCode} alt="Qr Code"/>
                    </div>
                </div>
                <div className="product-thumbnail">
                    <img src={product.thumbnail} alt="Thumbnail"/>
                </div>
            </div>
            <div className="product-images">
                {
                    product.images.map((image, index) =>
                        (<img key={index} src={image} alt="Product Image"/>))
                }
            </div>
            <div className="product-review-block">
                {
                    product.reviews.map((review, index) =>
                        (<DummyReviewComponent key={index} review={review}/>))
                }
            </div>
        </div>
    );
};

export default DummyProductComponent;
