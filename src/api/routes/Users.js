const { queryAuth } = require('../../middlewares/authentication');
const { getAllUsers, deleteUser } = require('../controllers/users');

const router = require('express').Router();

router.get('/', queryAuth, getAllUsers);
router.delete('/:id', queryAuth, deleteUser);

module.exports = router;
