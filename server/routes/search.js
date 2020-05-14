// Packages
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const { check, validationResult } = require('express-validator');

// Mongoose Model
const MountainSchema = require('../models/Mountain');

// Custom Functions
const { buildSnowQualityAndWeatherForecast } = require('../src/src');
const { geocodeAddress } = require('../src/utils/mapbox-geocode');

// @route   POST api/search
// @desc    Build forecast and recent snow quality based on user inputs
// @access  Public
router.post(
    '/api/search',
    [
        check('filterBy').not().isEmpty().trim(),
        check('upperBound').not().isEmpty().isInt().trim(),
        check('mountainState').not().isEmpty().trim(),
        check('address').not().isEmpty().trim(),
    ],
    async (req, res) => {
        // Before executing functions, check if any errors with req.body.
        // If there are errors, then return 400 and errors.
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        // If no errors, continue.

        const { filterBy, upperBound, mountainState, address } = req.body;

        const Washington = mongoose.model(
            'Mountain',
            MountainSchema,
            mountainState
        );

        // Query database for all Washington mountains.
        // Call lean() so that we're returned a JS object instead of Mongo document.
        const mountains = await Washington.find({}).lean();

        // Geocode the address.
        const startPointCoordinates = await geocodeAddress(address);

        // Build our weather and snow object.
        const mountainsWithForecastAndSnow = await buildSnowQualityAndWeatherForecast(
            filterBy,
            upperBound,
            mountains,
            startPointCoordinates
        );

        res.json({ mountainsWithForecastAndSnow });
    }
);

module.exports = router;
