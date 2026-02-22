import "../styles/products.css";

import { useEffect, useRef, useState } from "react";
import Product from "./product/Product.js";
import { getNewCursor, getNewData } from "../../data/data-handler.js";

export default function Products({ initialData }) {
    const [cursor, setCursor] = useState(0);
    const [data, setData] = useState(getNewData(initialData, cursor).value);
    const [hasMoreData, setHasMoreData] = useState(true);
    const isPopupBusy = useRef(false);

    useEffect(() => {
        scrollTo({top: 0, behavior: "smooth"})
    }, [])

    const handleLoadMoreClick = () => {
        const newCursor = getNewCursor(cursor);
        const newData = getNewData(initialData, newCursor);
        setData(newData.value);
        setCursor(newCursor);
        setHasMoreData(!newData.done);
    }
     
    return (
        <div id="products__container">
            <div id="products">
                {data.map(record => 
                    <Product data={record} key={record.id} isPopupBusy={isPopupBusy} />)}
            </div>
            {hasMoreData && 
                <div className="btn-container">
                    <button id="load-btn" type="button" onClick={handleLoadMoreClick}>Load more</button>
                </div>}
            
        </div>
    )
}