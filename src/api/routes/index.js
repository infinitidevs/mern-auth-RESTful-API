const express = require('express');
const authRouter = require('./Auth');
const coffeesRouter = require('./Coffees');
const varietiesRouter = require('./Varieties');
const usersRouter = require('./Users');
const router = express.Router();

router.use('/coffees', coffeesRouter);
router.use('/varieties', varietiesRouter);
router.use('/auth', authRouter);
router.use('/users', usersRouter);

module.exports = router;
