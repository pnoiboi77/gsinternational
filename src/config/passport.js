var passport = require('passport');

module.exports = function(app, mUrl) {
  app.use(passport.initialize());
  app.use(passport.session());

  passport.serializeUser(function(user, done) {
    done(null, user);
  });

  passport.deserializeUser(function(user, done) {
    done(null, user);
  });

  require('./strategies/localstrategy.js')(mUrl);
};
