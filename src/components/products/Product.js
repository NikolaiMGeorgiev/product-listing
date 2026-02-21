import "../../styles/product.css";

import Price from "./Price";

export default function Product({ data }) {
    return (
        <article className="product">
            <section>
                <div className="product__title">
                    <h2>{data.name}</h2>
                    <h3>{data.artist}</h3>
                    {data.discount > 0 && <span className="discount">{`${data.discount * 100}% OFF`}</span>}
                </div>
                <img src={data.cover} alt={`Cover of the album ${data.name} by ${data.artist}`} />
                <div className="product__description">
                    <p>{data.description}</p>
                    <span>...</span>
                </div>
                <Price amount={data.price} discount={data.discount} />
                <div className="btn-container">
                    <button className="buy-btn" type="button">Add to cart</button>
                </div>
            </section>
        </article>
    )
}