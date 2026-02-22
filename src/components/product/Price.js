import "../../styles/price.css";

export default function Price({ amount, discount }) {
    const fixedDiscount = Number.parseFloat(amount * (1 - discount)).toFixed(2);

    return (
        <div className="product__price">
            <span className={`amount ${discount ? "discounted" : ""}`}>{amount} &#8364;</span>
            {discount > 0 && <span className="discount">{fixedDiscount} &#8364;</span>}
        </div>
    )
}