import HalfStarIcon from "../icons/HalfStarIcon";
import StarIcon from "../icons/StarIcon";

export default function Rating({ itemId, rating }) {
    return (
        <div className="rating">
            {[1, 2, 3, 4, 5].map((i) => 
                rating < i && rating >= i - 0.5 ?
                    <HalfStarIcon key={i} /> : 
                    (rating >= i ?
                        <StarIcon key={i} className="filled" /> :
                        <StarIcon key={i} />)

            )}
            <span>{`(${rating})`}</span>
        </div>
    )
}