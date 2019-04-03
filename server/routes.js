const express = require('express');

const router = express.Router();

const positions = require('./controllers/positions');
const aboutMe = require('./controllers/aboutMe');
const skills = require('./controllers/skills');
const interests = require('./controllers/interests');
const links = require('./controllers/links');

router.use('/positions', positions);
router.use('/interests', interests);
router.use('/skills', skills);
router.use('/aboutMe', aboutMe);
router.use('/links', links);

module.exports = router;
