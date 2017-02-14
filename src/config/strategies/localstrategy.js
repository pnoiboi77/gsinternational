var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongodb = require('mongodb').MongoClient;

module.exports = function(mUrl) {
  passport.use(new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password'
  }, function(username, password, done) {
    mongodb.connect(mUrl, function(err, db) {
      var collection = db.collection('users');

      collection.findOne({username: username},
      function (err, results) {
        if (results.password === password) {
          var user = results;
          done(null, user);
        } else {
          done(null, false,
            {message: 'Invalid Username or Password'});
        }
      });
    });
  }));
};
