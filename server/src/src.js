const { googleDistance } = require('./utils/google-distance');
const { buildThreeDayForecast } = require('./utils/dark-sky');
const { snowQuality } = require('./utils/powderline');

const buildSnowQualityAndWeatherForecast = async (
    filterBy,
    upperBound,
    mountains,
    origin
) => {
    // Build our mountain objects, filtered by distance or travel time, complete with 3 day weather forecast and past 3 day snow change.

    const qualifiedMountains = await googleDistance(
        filterBy,
        upperBound,
        mountains,
        origin
    );

    const mountainsWithForecast = await buildThreeDayForecast(
        qualifiedMountains
    );

    const mountainsWithForecastAndSnow = await snowQuality(
        mountainsWithForecast
    );

    // console.log(mountainsWithForecastAndSnow);
    return mountainsWithForecastAndSnow;
};

module.exports = {
    buildSnowQualityAndWeatherForecast,
};
