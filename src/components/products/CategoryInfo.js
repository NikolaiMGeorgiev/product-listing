import { categoryData } from "../../../data/data";

export default function CategoryInfo({ name }) {
    const data = categoryData[name];

    return (
        <div id="category-info">
            <img src={`../public/${data.image}`} />
            <div className="category-info__text">
                <h1>{data.title}</h1>
                <p>{data.text}</p>
            </div>
        </div>
    )
}