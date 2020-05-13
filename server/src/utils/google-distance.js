require('dotenv').config();
const axios = require('axios');

const googleDistance = async (filterBy, upperBound, mountains, origin) => {
    // Determine what mountains fall within desired distance or time-to-destination.

    const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;

    // Built out our URLs
    const urls = mountains.map((mountain) => {
        return `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${origin}&destinations=${mountain['latitude']},${mountain['longitude']}&key=${GOOGLE_API_KEY}`;
    });

    try {
        const qualifiedMountains = [];

        // Loop through the URLs and return an array of mountains that meets distance or duration limit.
        for (let x = 0; x < urls.length; x++) {
            let res = await axios.get(urls[x]);
            let data = res.data.rows[0].elements[0];

            // Determine whether we're filtering by distance or duration.
            if (
                filterBy == 'distance' &&
                data.distance.value <= upperBound * 1609.34
            ) {
                let qualifiedMountain = {
                    ...mountains[x],
                    distance: data.distance,
                };

                qualifiedMountains.push(qualifiedMountain);
            } else if (
                filterBy == 'duration' &&
                data.duration.value <= upperBound
            ) {
                let qualifiedMountain = {
                    ...mountains[x],
                    duration: data.duration,
                };

                qualifiedMountains.push(qualifiedMountain);
            }
        }

        return qualifiedMountains;
    } catch (error) {
        console.error(error);

        const qualifiedMountainsError = {
            ...mountains,
            err: 'An error occurred, please try again later.',
        };

        return qualifiedMountainsError;
    }
};

module.exports = {
    googleDistance,
};
