import "../../styles/product.css";

import BuyButton from "./BuyButton";
import Price from "./Price";
import Rating from "./Rating";

export default function Product({ data, isPopupBusy }) {
    return (
        <article className="product">
            <section>
                <div className="product__title">
                    <h2>{data.name}</h2>
                    <h3>{data.artist}</h3>
                    {data.discount > 0 && 
                        <span className="discount">{`${data.discount * 100}% OFF`}</span>}
                </div>
                <img src={data.cover} alt={`Cover of the album ${data.name} by ${data.artist}`} />
                <div className="product__additional-info">
                    <h4>Released: {data.year}</h4>
                    <Rating itemId={data.id} rating={data.rating} />
                </div>
                <div className="product__description">
                    <p>{data.description}</p>
                    <span>...</span>
                </div>
                <Price amount={data.price} discount={data.discount} />
                <BuyButton item={data} isPopupBusy={isPopupBusy} />
            </section>
        </article>
    )
}