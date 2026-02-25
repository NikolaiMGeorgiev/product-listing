import "../styles/products.css";

import { useEffect, useRef, useState } from "react";
import Product from "./product/Product.js";
import { filterData, getNewCursor, getNewData, sortData } from "../../data/data-handler.js";
import ProductCounter from "./products/ProductCounter.js";
import CategoryInfo from "./products/CategoryInfo.js";
import Filter from "./products/Filter.js";
import Sort from "./products/Sort.js";

export default function Products({ initialData, type }) {
    const [cursor, setCursor] = useState(0);
    const [fullData, setFullData] = useState(initialData);
    const [data, setData] = useState(getNewData(fullData, cursor).value);
    const [filter, setFilter] = useState(null);
    const [sortedBy, setSortedBy] = useState(null);
    const [hasMoreData, setHasMoreData] = useState(true);
    const isPopupBusy = useRef(false);

    useEffect(() => {
        scrollTo({top: 0, behavior: "smooth"})
    }, [])

    useEffect(() => {
        if (filter && Object.keys(filter).length) {
            const newData = filterData(initialData, filter);
            const pagedData = getNewData(newData, 0);
            setFullData(newData);
            setData(pagedData.value)
            setHasMoreData(!pagedData.done)
        } else {
            setFullData(initialData);
            setData(getNewData(initialData, 0).value);
        }
        setCursor(0);
    }, [filter])

    useEffect(() => {
        if (!sortedBy) {
            return;
        }
        const newFullData = sortData(fullData, sortedBy);
        setFullData(newFullData);
        setData(getNewData(newFullData, 0).value)
    }, [sortedBy])

    const handleLoadMoreClick = () => {
        const newCursor = getNewCursor(cursor);
        const newData = getNewData(fullData, newCursor);
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
                    <ProductCounter key="progress-bar" cursor={cursor} dataLength={fullData.length} />)
            }
            dataList.push(<Product data={record} key={record.id} isPopupBusy={isPopupBusy} />)
        }
        return dataList;
    }
     
    return (
        <div id="products__container">
            <Filter setFilter={setFilter} />
            <CategoryInfo name={type} />
            <Sort sortedBy={sortedBy} setSortedBy={setSortedBy} />
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