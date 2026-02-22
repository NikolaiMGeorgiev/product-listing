import "../styles/products.css";

import { useRef, useState } from "react";
import Product from "./product/Product.js";
import { getNewCursor, getNewData } from "../../data/data-handler.js";

export default function Products() {
    const [cursor, setCursor] = useState(0);
    const [data, setData] = useState(getNewData(cursor).value);
    const [hasMoreData, setHasMoreData] = useState(true);
    const isPopupBusy = useRef(false);

    const handleLoadMoreClick = () => {
        const newCursor = getNewCursor(cursor);
        const newData = getNewData(newCursor);
        setData(newData.value);
        setCursor(newCursor);
        setHasMoreData(!newData.done);
    }
     
    return (
        <div id="products__container">
            <div id="products">
                {data.map(record => 
                    <Product data={record} key={`${record.name}_${record.artist}`} isPopupBusy={isPopupBusy} />)}
            </div>
            {hasMoreData && 
                <div className="btn-container">
                    <button id="load-btn" type="button" onClick={handleLoadMoreClick}>Load more</button>
                </div>}
            
        </div>
    )
}