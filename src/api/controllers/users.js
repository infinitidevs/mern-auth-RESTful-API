const { setError } = require('../../config/error');
const { signToken } = require('../../config/jwt');
const { verifyPassword } = require('../../config/password');
const { deleteFile } = require('../../middlewares/deleteFile');
const User = require('../models/user');

const getAllUsers = async (req, res, next) => {
  try {
    const allUsers = await User.find().lean();
    res.status(200).json({ data: allUsers });
  } catch (err) {
    return next(setError(404, "Can't find users"));
  }
};

const register = async (req, res, next) => {
  try {
    const newUser = new User(req.body);
    const emailDuplicate = await User.findOne({ email: req.body.email });
    if (emailDuplicate) {
      return next(setError(400, 'This user already exists'));
    }
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/;
    const validatePassword = regex.test(req.body.password);
    if (validatePassword === false) {
      return next(
        setError(
          400,
          'The password must contain lowercase, uppercase, a number and at least 6 characters.'
        )
      );
    }
    const user = await newUser.save();
    res.status(201).json({ data: user });
  } catch (err) {
    return next(setError(400, 'Error registering user'));
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) {
      return next(setError(401, "User doesn't exists"));
    }
    const verifiedPassword = await verifyPassword(password, user.password);
    if (!verifiedPassword) {
      return next(setError(401, 'Incorrect email or password'));
    }
    const token = signToken({ id: user._id });
    res.status(200).json({ data: { token, user } });
  } catch (err) {
    return next(setError(400, "Can't login"));
  }
};

const createOrUpdateAvatar = async (req, res, next) => {
  try {
    const { id } = req.user;
    const { path } = req.file;
    if (req.file) {
      const oldUser = await User.findById(id);
      if (oldUser.avatar) {
        deleteFile(oldUser.avatar);
      }
      await User.findById(id);
      await User.updateOne({ _id: id }, { avatar: path });
    }
    console.log('>>> Uploaded image');
    res.status(201).json({ data: path });
  } catch (err) {
    return next(setError(401, "Can't create or update avatar"));
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);
    if (user.avatar) {
      deleteFile(user.avatar);
    }
    res.status(200).json({ data: 'OK' });
  } catch (err) {
    return next(setError(400, "Can't delete user"));
  }
};

module.exports = {
  getAllUsers,
  register,
  login,
  createOrUpdateAvatar,
  deleteUser
};
