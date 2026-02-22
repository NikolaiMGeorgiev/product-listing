import { ITEMS_PER_PAGE } from "../src/config";
import {data} from "./data.js"

export const newEntriesData = data.filter(albumData => albumData.year > 2020);
export const classicsData = data.filter(albumData => albumData.year < 1990);
export const salesDate = data.filter(albumData => albumData.discount);
export const fullData = [...data];

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