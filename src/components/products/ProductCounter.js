import "../../styles/product-counter.css"

export default function ProductCounter({ cursor, dataLength, itemsPerPage }) {
    const productsShown = cursor + itemsPerPage > dataLength ? dataLength : cursor + itemsPerPage;
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