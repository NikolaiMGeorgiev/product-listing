import * as fs from "fs";
import { v4 as getId } from "uuid";

const API_HOST = "https://www.theaudiodb.com/api/v1/json/123";

const prices = [15.99, 19.99, 24.99, 29.99, 34.99];
const discounts = [0, 0, 0, 0, 0, 0, 0, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35];
const artists = [
    "billie_eilish",
    "the_weeknd",
    "sade",
    "sleep_token",
    "tool",
    "lana_del_rey",
    "banks",
    "travis_scott",
    "sevdaliza",
    "lorde",
    "pink_floyd",
    "fleetwood_mac",
    "stevie_nicks",
    "bad_omens",
    "maneskin",
    "rainbow",
    "greta_van_fleet",
    "madonna",
    "bjork",
];
const data = [];

for (const artist of artists) {
    const albumsData = await getArtistAlbums(artist);
    if (albumsData && albumsData.length) {
        data.push(...albumsData);
    }
    fs.writeFileSync("./data/data.json", JSON.stringify(data));
}


async function getArtistAlbums(artist) {
    const response = await fetch(`${API_HOST}/searchalbum.php?s=${artist}`);
    const data = await response.json();
    return data.album
            .filter(albumData => 
                albumData.strReleaseFormat == "Album" && 
                albumData.strAlbumCDart &&
                albumData.strAlbumThumb)
            .map(albumData => ({
                id: getId(),
                artist: albumData.strArtist,
                name: albumData.strAlbum,
                year: albumData.intYearReleased,
                cover: albumData.strAlbumThumb,
                disc: albumData.strAlbumCDart,
                genre: albumData.strGenre,
                style: albumData.strStyle,
                description: albumData.strDescriptionEN,
                price: getRandomNumber(prices),
                discount: getRandomNumber(discounts),
                rating: Number.parseFloat(Math.random() * (2) + 3).toFixed(1)
            }));
}

function getRandomNumber(dataset) {
    const max = dataset.length;
    const randomNumber = Math.floor(Math.random() * max);
    return dataset[randomNumber];
}
