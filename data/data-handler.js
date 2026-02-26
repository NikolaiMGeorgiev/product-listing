export function getNewData(data, cursor, itemsPerPage) {
    if (cursor + itemsPerPage >= data.length) {
        return {
            value: [...data],
            done: true
        };
    }
    return {
        value: [...data].splice(0, cursor + itemsPerPage),
        done: false
    };
}

export function getNewCursor(cursor, itemsPerPage) {
    return cursor + itemsPerPage;
}

export function filterData(data, filterData) {
    const filters = Object.keys(filterData);
    return data.filter(single => {
        for (let filter of filters) {
            if (filterData[filter].indexOf(single[filter]) == -1) {
                return false;
            }
        }
        return true;
    })
}

export function sortData(data, sortedBy) {
    const newData = [...data];
    newData.sort((a, b) => {
        if (sortedBy == "titleAsc") {
            return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
        } else if (sortedBy == "titleDesc") {
            return a.name.toLowerCase() > b.name.toLowerCase() ? -1 : 1
        } else if (sortedBy == "priceAsc") {
            return a.price * (1 - a.discount) - b.price * (1 - b.discount);
        } else if (sortedBy == "priceDesc") {
            return b.price * (1 - b.discount) - a.price * (1 - a.discount);
        }
    });
    return newData;
}

export function getItemsPerPage() {
    return getComputedStyle(document.querySelector(":root")).getPropertyValue("--items-per-page");
}