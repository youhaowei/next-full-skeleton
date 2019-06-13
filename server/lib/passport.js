const passport = require("passport");
const config = require("../config");
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const User = require("../models/user");

passport.serializeUser(function(user, done) {
	done(null, user.id);
});

passport.deserializeUser(function(id, done) {
	User.findById(id, function(err, user) {
		done(err, user);
	});
});

passport.use(
	new GoogleStrategy(
		{
			clientID: config.google.client.id,
			clientSecret: config.google.client.secret,
			callbackURL: config.server.baseUrl + "/auth/google/callback"
		},
		function(accessToken, refreshToken, profile, done) {
			User.findOne({ email: profile.email }, function(err, user) {
				if (!user) {
					User.create(
						{
							email: profile.email,
							googleId: profile.id,
							firstName: profile.name.givenName,
							lastName: profile.name.familyName,
							picture: profile.photos[0].value
						},
						function(err, newUser) {
							done(err, newUser);
						}
					);
				} else {
					done(err, user);
				}
			});
		}
	)
);

module.exports = passport;
