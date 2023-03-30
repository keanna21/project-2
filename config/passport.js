const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const UserModel = require("../models/user");
//Require your User Model here!

// configuring Passport!
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK,
    },
    async function (accessToken, refreshToken, profile, cb) {
      // a user has logged in via OAuth!
      // refer to the lesson plan from earlier today in order to set this up

      try {
        let user = await UserModel.findOne({ googleId: profile.id });

        if (user) return cb(null, user);

        user = await UserModel.create({
          name: profile.displayName,
          googleId: profile.id,
          email: profile.emails[0].value,
          avatar: profile.photos[0].value,
        });
      } catch (err) {
        cb(err);
      }
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user._id);
});

passport.deserializeUser(function (userId, done) {
  UserModel.findById(userId)
    .then(function (userDoc) {
      done(null, userDoc);
    })
    .catch((err) => {
      done(err);
    });
  // Find your User, using your model, and then call done(err, whateverYourUserIsCalled)
  // When you call this done function passport assigns the user document to req.user, which will
  // be availible in every Single controller function, so you always know the logged in user
});
