import "../../styles/product.css";
import SingleRowTitle from "../common/SingleRowTitle";

import BuyButton from "./BuyButton";
import Price from "./Price";
import Rating from "./Rating";

export default function Product({ data, isPopupBusy }) {
    return (
        <article className="product">
            <section>
                <div className="product__title">
                    <SingleRowTitle title={data.name} Header="h2" />
                    <h3>{data.artist}</h3>
                    {data.discount > 0 && 
                        <span className="discount">{`${data.discount * 100}% OFF`}</span>}
                </div>
                <img src={data.cover} alt={`Cover of the album ${data.name} by ${data.artist}`} />
                <div className="product__additional-info">
                    <div className="product__stats single-centered-row">
                        <div className="year additional-info">Released: {data.year}</div>
                        <div className="genre additional-info">Genre: {data.genre}</div>
                    </div>
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