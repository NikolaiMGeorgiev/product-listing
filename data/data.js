
import { data } from "./products-data.js"

export const newEntriesData = data.filter(albumData => albumData.year > 2020);
export const classicsData = data.filter(albumData => albumData.year < 1990);
export const salesDate = data.filter(albumData => albumData.discount);
export const fullData = [...data];
export const categoryData = {
    all: {
        href: "/",
        title: "All CDs",
        image: "all-discs-hero.png",
        text: "Our full selection of records - all in one place. Find a new favourite, renew the flame with an old classic to bring you back to the good old days, or just see what catches your eye."
    }, 
    new: {
        href: "/new",
        title: "New Entires",
        image: "new-arrivals-hero.png",
        text: "Looking for the hotest hits from the past decade? Or for some new indie deep cuts? We got you! Browse trough our special selection of new arrivals and find the voices of modern art."
    },
    classics: {
        href: "/classics",
        title: "Classics",
        image: "classics-hero.png",
        text: "Whether you are in the mood for an old favourite or a new retro obsession, this is the place for you. We've selected records that have proven the test of time and earned the status of evergreen classics."
    },
    sale: {
        href: "/sale",
        title: "Sale",
        image: "sale-hero.png",
        text: "Records that are light on the wallet but heavy-handed on the good vibes. Don't miss out on these deals as they are available only for a limited time."
    }
};

export const genres = data
    .reduce((accumulator, albumData) => {
        const genre = albumData.genre;
        if (genre && accumulator.indexOf(genre) == -1) {
            accumulator.push(genre);
        }
        return accumulator;
    }, []);

export const artists = data
    .reduce((accumulator, albumData) => {
        const artist = albumData.artist;
        if (accumulator.indexOf(artist) == -1) {
            accumulator.push(artist);
        }
        return accumulator;
    }, []);

export const sorting = [
    {
        value: "titleAsc",
        text: "Title (A-Z)"
    }, {
        value: "titleDesc",
        text: "Title (Z-A)"
    }, {
        value: "priceAsc",
        text: "Price (Low to High)"
    }, {
        value: "priceDesc",
        text: "Price (High to Low)"
    }
]