import "../../styles/product-counter.css"

import { ITEMS_PER_PAGE } from "../../config";

export default function ProductCounter({ cursor, dataLength }) {
    const productsShown = cursor + ITEMS_PER_PAGE > dataLength ? dataLength : cursor + ITEMS_PER_PAGE;
    const progress = Math.ceil(productsShown * 100 / dataLength);

    return (
        <div className="product-counter">
            <p>{productsShown} out of {dataLength} products</p>
            <div className="product-counter__progress-bar">
                <div style={{width: `${progress}%`}}></div>
            </div>
        </div>
    )
}