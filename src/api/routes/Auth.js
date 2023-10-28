const { register, login, createOrUpdateAvatar } = require('../controllers/users');
const { auth } = require('../../middlewares/authentication');
const uploadFile = require('../../middlewares/uploadFile');

const router = require('express').Router();

router.post('/register', register);
router.post('/login', login);
router.post('/avatar', auth, uploadFile.single('avatar'), createOrUpdateAvatar);

module.exports = router;
