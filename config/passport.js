var JwtStrategy = require("passport-jwt").Strategy,
    ExtractJwt = require("passport-jwt").ExtractJwt;

// load up the user model
var User = require("../modules/users/Users");
var config = require("../config/config"); // get db config file

module.exports = function (passport) {
  var opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
    opts.secretOrKey = config.secret;
    // passport.use(
    //     new JwtStrategy(opts, function (jwt_payload, done) {
    //       User.findOne({ id: jwt_payload.id }, function (err, user) {
    //           if (err) {
    //             return done(err, false);
    //           }
    //           if (user) {
    //             return done(null, user);
    //           } 
    //           else {
    //             return done(null, false);
    //           }
    //       });
    //     })
    // );
};
