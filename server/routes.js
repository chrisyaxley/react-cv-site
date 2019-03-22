

const express = require('express');

const router = express.Router();
const positions = require('./controllers/positions');
const aboutMe = require('./controllers/aboutMe');
const skills = require('./controllers/skills');
const interests = require('./controllers/interests');

router.use('/positions', positions.getAllVisible);
router.use('/interests', interests.getAllVisible);
router.use('/skills', skills.getAll);
router.use('/aboutMe', aboutMe.fetch);

module.exports = router;
