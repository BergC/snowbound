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

// buildSnowQualityAndWeatherForecast(
//     'distance',
//     100,
//     [
//         {
//             _id: '5ebb434b0a0f3e646034c643',
//             name: 'mount baker',
//             latitude: '48.858511',
//             longitude: '-121.665897',
//             __v: 0,
//         },
//         {
//             _id: '5ebb434b0a0f3e646034c642',
//             name: 'crystal mountain',
//             latitude: '46.935392',
//             longitude: '-121.474732',
//             __v: 0,
//         },
//         {
//             _id: '5ebb434b0a0f3e646034c644',
//             name: 'snoqualmie',
//             latitude: '47.410233',
//             longitude: '-121.413504',
//             __v: 0,
//         },
//         {
//             _id: '5ebb434b0a0f3e646034c646',
//             name: 'white pass',
//             latitude: '46.637500',
//             longitude: '-121.391323',
//             __v: 0,
//         },
//         {
//             _id: '5ebb434b0a0f3e646034c648',
//             name: 'alpental',
//             latitude: '47.444306',
//             longitude: '-121.426016',
//             __v: 0,
//         },
//     ],
//     '47.623550,-122.330974'
// );

module.exports = {
    buildSnowQualityAndWeatherForecast,
};
