require('dotenv').config();

const axios = require('axios');

const buildThreeDayForecast = async (qualifiedMountains) => {
    // Ping Dark Sky API to get weather forecast for each mountain.

    const DARK_SKY_KEY = process.env.DARK_SKY_KEY;

    // Build our URLs based upon our API key and mountain latitude and longitude.
    const urls = qualifiedMountains.map((qualifiedMountain) => {
        return `https://api.darksky.net/forecast/${DARK_SKY_KEY}/${qualifiedMountain.latitude},${qualifiedMountain.longitude}`;
    });

    try {
        const mountainsWithForecast = [];

        // Loop through axios GET requests and update our mountain object by adding returned weather forecast.
        for (let x = 0; x < urls.length; x++) {
            let res = await axios.get(urls[x]);

            // Only want 3 day weather forecast.
            let data = res.data.daily.data.slice(0, 3);

            let forecast = data.map((dailyForecast) => {
                return {
                    time: dailyForecast.time,
                    precip: dailyForecast.precipType,
                    precipProbability: dailyForecast.precipProbability,
                    precipIntensity: dailyForecast.precipIntensity,
                    precipIntensityMax: dailyForecast.precipIntensityMax,
                    precipIntensityMaxTime:
                        dailyForecast.precipIntensityMaxTime,
                    minTemp: dailyForecast.temperatureMin,
                    maxTemp: dailyForecast.temperatureMax,
                };
            });

            mountainsWithForecast.push({
                ...qualifiedMountains[x],
                forecast,
            });
        }

        return mountainsWithForecast;
    } catch (error) {
        console.error(error);

        const mountainsWithForecastError = qualifiedMountains.map(
            (qualifiedMountain) => {
                return {
                    ...qualifiedMountain,
                    forecast: {
                        err: 'An error occurred, please try again later.',
                    },
                };
            }
        );

        return mountainsWithForecastError;
    }
};

module.exports = {
    buildThreeDayForecast,
};
