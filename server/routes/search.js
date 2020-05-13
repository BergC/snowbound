// Packages
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Mongoose Model
const MountainSchema = require('../models/Mountain');

// Custom Functions
const { buildSnowQualityAndWeatherForecast } = require('../src/src');

// @route   POST api/search
// @desc    Build forecast and recent snow quality based on user inputs
// @access  Public
router.post('/api/search', async (req, res) => {
    const Washington = mongoose.model('Mountain', MountainSchema, 'washington');

    // Query database for all Washington mountains.
    // Call lean() so that we're returned a JS object instead of Mongo document.
    const mountains = await Washington.find({}).lean();

    const mountainsWithForecastAndSnow = await buildSnowQualityAndWeatherForecast(
        'distance',
        150,
        mountains,
        '47.623550,-122.330974'
    );

    res.json({ mountainsWithForecastAndSnow });
});

module.exports = router;
