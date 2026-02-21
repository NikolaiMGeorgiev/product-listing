import "../styles/products.css";

import { useState } from "react";
import { data as initialData } from "../../data/data.js";
import Product from "./products/Product.js";

export default function Products() {
    const [data, setData] = useState([...initialData].splice(0, 10));
    
    return (
        <div id="products__container">
            <div id="products">
                {data.map(record => <Product data={record} key={`${record.name}_${record.artist}`} />)}
            </div>
            <div className="btn-container">
                <button id="load-btn">Load more</button>
            </div>
        </div>
    )
}