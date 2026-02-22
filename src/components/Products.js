import "../styles/products.css";

import { useEffect, useRef, useState } from "react";
import Product from "./product/Product.js";
import { getNewCursor, getNewData } from "../../data/data-handler.js";
import ProductCounter from "./products/ProductCounter.js";

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

    const getProductsList = () => {
        const dataList = [];
        for (let i = 0; i < data.length; i++) {
            const record = data[i];
            if (i == cursor) {
                dataList.push(
                    <ProductCounter key="progress-bar" cursor={cursor} dataLength={initialData.length} />)
            }
            dataList.push(<Product data={record} key={record.id} isPopupBusy={isPopupBusy} />)
        }
        return dataList;
    }
     
    return (
        <div id="products__container">
            <div id="products">
                {getProductsList()}
            </div>
            {hasMoreData && 
                <div className="btn-container">
                    <button id="load-btn" type="button" onClick={handleLoadMoreClick}>Load more</button>
                </div>}
            
        </div>
    )
}