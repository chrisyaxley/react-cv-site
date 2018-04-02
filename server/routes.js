"use strict";
var express = require('express');
var router = express.Router();
var positions = require('./controllers/positions');
var aboutMe = require('./controllers/aboutMe');
var skills = require('./controllers/skills');

router.use('/positions', positions.getAllVisible);
router.use('/skills', skills.getAll);
router.use('/aboutMe', aboutMe.fetch);

module.exports = router;
