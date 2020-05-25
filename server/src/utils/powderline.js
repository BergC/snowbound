const axios = require('axios');

const snowQuality = async (qualifiedMountains) => {
    // Use Powderline API to ping SNOTEL stations and return last 3 day snow depth change.

    // Build our urls with the latitude and longitude of each mountain.
    const urls = qualifiedMountains.map((qualifiedMountain) => {
        return `http://api.powderlin.es/closest_stations?lat=${qualifiedMountain.latitude}&lng=${qualifiedMountain.longitude}&data=true&days=2&count=3`;
    });

    try {
        let snowQuality = [];

        // Loop through each GET request and modify our mountain object by returned adding snow quality data.
        for (let x = 0; x < urls.length; x++) {
            let res = await axios.get(urls[x]);
            let data = res.data;

            // Keep information for first station that contains snow depth information.
            // Some of the Snotel stations send null values for snow depth.
            // We want to keep the closest station (e.g. first station to occur) with snow depth information.
            station: for (
                let stationCount = 0;
                stationCount < data.length;
                stationCount++
            ) {
                snow: for (
                    let snowReportCount = 0;
                    snowReportCount < data[stationCount].data.length;
                    snowReportCount++
                ) {
                    if (
                        Object.values(
                            data[stationCount].data[snowReportCount]
                        ).includes(null) === false
                    ) {
                        data = data[stationCount];
                        break station;
                    }
                }
                // console.log(data[stationCount].data);
            }

            // console.log(data);
            snowQuality.push({
                ...qualifiedMountains[x],
                snowQuality: data,
            });
        }

        // console.log(snowQuality[0]);
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

// snowQuality([{ longitude: '-121.474732', latitude: '46.935392' }]);

module.exports = {
    snowQuality,
};
