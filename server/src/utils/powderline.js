const axios = require('axios');

const snowQuality = async (qualifiedMountains) => {
    // Use Powderline API to ping SNOTEL stations and return last 3 day snow depth change.

    // Build our urls with the latitude and longitude of each mountain.
    const urls = qualifiedMountains.map((qualifiedMountain) => {
        return `http://api.powderlin.es/closest_stations?lat=${qualifiedMountain.latitude}&lng=${qualifiedMountain.longitude}&data=true&days=2&count=3`;
    });

    try {
        const snowQuality = [];

        // Loop through each GET request and modify our mountain object by returned adding snow quality data.
        for (let x = 0; x < urls.length; x++) {
            let res = await axios.get(urls[x]);
            let data = res.data;

            snowQuality.push({
                ...qualifiedMountains[x],
                snowQuality: data,
            });
        }

        return snowQuality;
    } catch (error) {
        console.error(error);
        const snowQualityError = qualifiedMountains.map((qualifiedMountain) => {
            return {
                ...qualifiedMountain,
                snowQuality: {
                    err: 'An error occured, please try again later.',
                },
            };
        });

        return snowQualityError;
    }
};

module.exports = {
    snowQuality,
};
