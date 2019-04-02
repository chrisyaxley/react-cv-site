

const express = require('express');

const router = express.Router();
const positions = require('./controllers/positions');
const aboutMe = require('./controllers/aboutMe');
const skills = require('./controllers/skills');
const interests = require('./controllers/interests');
const links = require('./controllers/links');

router.use('/positions', positions.getAllVisible);
router.use('/interests', interests.getAllVisible);
router.use('/skills', skills.getAll);
router.use('/aboutMe', aboutMe.fetch);
router.use('/links', links.getAll);

module.exports = router;
