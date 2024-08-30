  const LocalStrategy = require("passport-local").Strategy;
  const passport = require("passport");
  const User = require("../models/user_model");
  const bcrypt = require("bcrypt");

  passport.use(new LocalStrategy(
    { usernameField: 'email' },  
    async function(email, password, done) {
      try {
        const user = await User.findOne({ email: email }).exec(); // Use .exec() to return a Promise
        if (!user) {
          return done(null, false, { message: "Incorrect email" });
        }
        const matchpass = await bcrypt.compare(password, user.password);
        if (!matchpass) {
          return done(null, false, { message: "Incorrect password" });
        }
        return done(null, user);
      } catch (err) {
        return done(err);
      }
    }
  ));

  // Serialize user data into the session
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  // Deserialize user data from the session
  passport.deserializeUser(async function(id, done) {
    try {
      const user = await User.findById(id).exec(); // Use .exec() to return a Promise
      done(null, user);
    } catch (err) {
      done(err);
    }
  });

