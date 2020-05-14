require('dotenv').config();
const axios = require('axios');

// Use Mapbox Geocode API to take address and convert to coordinates.
const geocodeAddress = async (address) => {
    const MAPBOX_API_KEY = process.env.MAPBOX_API_KEY;

    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURI(
        address
    )}.json?access_token=${MAPBOX_API_KEY}&limit=2&country=US`;

    const res = await axios.get(url);

    const coordinatesArr = res.data.features[0].center;

    const coordinates = coordinatesArr[1] + ',' + coordinatesArr[0];

    return coordinates;
    // console.log(coordinates);
};

module.exports = {
    geocodeAddress,
};
