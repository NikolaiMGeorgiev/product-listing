import { ITEMS_PER_PAGE } from "../src/config";

export function getNewData(data, cursor) {
    if (cursor + ITEMS_PER_PAGE >= data.length) {
        return {
            value: [...data],
            done: true
        };
    }
    return {
        value: [...data].splice(0, cursor + ITEMS_PER_PAGE),
        done: false
    };
}

export function getNewCursor(cursor) {
    return cursor + ITEMS_PER_PAGE;
}