const mongoose = require('mongoose');
const { hashPassword } = require('../../config/password');

const userSchema = new mongoose.Schema(
  {
    email: { type: 'string', required: true },
    password: { type: 'string', required: true },
    avatar: { type: 'string', required: false, trim: true }
  },
  {
    timestamps: true,
    collection: 'users_api'
  }
);

userSchema.pre('save', async function (next) {
  this.password = await hashPassword(this.password);
  next();
});

const User = mongoose.model('User', userSchema, 'users_api');

module.exports = User;
