/* const passport = require('passport');
const facebookStrategy = require('passport-facebook').Strategy
const { User } = require('../models/index');

// Esto debería estar en un archivo .env
const facebookAppId 
const facebookAppSecret

passport.use(
    new facebookStrategy({
        clientID: facebookAppId,
        clientSecret: facebookAppSecret,
        callbackURL: "http://localhost:1337/auth/facebook/callback",
        profileFields: ["email", "name"]
    },
    function(accessToken, refreshToken, profile, done) {
        console.log('PROFILE ', profile)
        User.findOrCreate({
            where: { email: profile.displayName, password: profile.id },
          })
            .then((user) => done(null, user))
            .catch(done);
    })
  );

passport.serializeUser((user, done) => {
    done(null, user);
  });
  
  passport.deserializeUser((user, done) => {
    User.findByPk(user.id)
      .then((user) => {
        done(null, user);
      })
      .catch(done);
  });

module.exports = passport; */