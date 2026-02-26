import "../styles/products.css";

import { useEffect, useRef, useState } from "react";
import Product from "./product/Product.js";
import { filterData, getItemsPerPage, getNewCursor, getNewData, sortData } from "../../data/data-handler.js";
import ProductCounter from "./products/ProductCounter.js";
import CategoryInfo from "./products/CategoryInfo.js";
import Filter from "./products/Filter.js";
import Sort from "./products/Sort.js";

export default function Products({ initialData, type }) {
    const itemsPerPageRef = useRef(getItemsPerPage());
    const itemsPerPage = Number.parseInt(itemsPerPageRef.current);
    const [cursor, setCursor] = useState(0);
    const [fullData, setFullData] = useState(initialData);
    const [data, setData] = useState(getNewData(fullData, cursor, itemsPerPage).value);
    const [filter, setFilter] = useState(null);
    const [sortedBy, setSortedBy] = useState(null);
    const [hasMoreData, setHasMoreData] = useState(!getNewData(fullData, cursor, itemsPerPage).done);
    const isPopupBusy = useRef(false);

    useEffect(() => {
        scrollTo({top: 0, behavior: "smooth"})
    }, [])

    useEffect(() => {
        let newFullData = initialData;
        let pagedData = [];
        if (filter && Object.keys(filter).length) {
            newFullData = filterData(initialData, filter);
            pagedData = getNewData(newFullData, 0, itemsPerPage);
        } else {
            pagedData = getNewData(initialData, 0, itemsPerPage);
        }

        if (sortedBy) {
            newFullData = sortData(newFullData, sortedBy);
            pagedData = getNewData(newFullData, 0, itemsPerPage);
            setFullData(newFullData);
            setData(getNewData(newFullData, 0, itemsPerPage).value)
        }

        setFullData(newFullData);
        setData(pagedData.value)
        setHasMoreData(!pagedData.done);
        setCursor(0);
    }, [filter, sortedBy])

    const handleLoadMoreClick = () => {
        const newCursor = getNewCursor(cursor, itemsPerPage);
        const newData = getNewData(fullData, newCursor, itemsPerPage);
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
                    <ProductCounter key="progress-bar" cursor={cursor} dataLength={fullData.length} itemsPerPage={itemsPerPage} />)
            }
            dataList.push(<Product data={record} key={record.id} isPopupBusy={isPopupBusy} />)
        }
        if (!data.length) {
            dataList.push(
                <div id="empty-data-message">No data matches filter. Please select other options.</div>
            )
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