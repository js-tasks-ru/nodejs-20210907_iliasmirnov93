const LocalStrategy = require('passport-local').Strategy;
const User = require('../../models/User');
const mongoose = require('mongoose');

module.exports = new LocalStrategy(
  { usernameField: 'email', session: false },
  async function (email, password, done) {

    try {
      const user = await User.findOne({ email });
      if (!user) {
        return done(null, false, 'Нет такого пользователя');
      }
      const passwordHashGeneration = await user.checkPassword(password);
      if (!passwordHashGeneration) {
        return done(null, false, 'Неверный пароль');
      }
      return done(null, user);
    }
    catch (err) {
      done(err);
    }
  },
);
