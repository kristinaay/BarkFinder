// const createError = require("http-errors");
const express = require("express");
const path = require("path");
const indexRouter = require("./myapp/routes");
const usersRouter = require("./myapp/routes/users");
const authRouter = require("./myapp/routes/auth");
//var logger = require("morgan");
const authUtils = require("./myapp/utils/auth");
const flash = require("connect-flash");
const Session = require("express-session");
const Passport = require("passport");
const Strategy = require("passport-local").Strategy;
const bodyParser = require("body-parser");

const app = express();

app.use(
  Session({
    secret: "session secret",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(flash());
app.use(Passport.initialize());
app.use(Passport.session());

//require("./path/to/Passport/config/file")(Passport);
//require("./routes")(app);
//require("./config/passport")(Passport);
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: false })); // support encoded bodies

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.locals.loggedIn = req.isAuthenticated();
  next();
});

// exports.passport = Passport.use(
//   "local",
//   new Strategy({ passReqToCallback: true }, (username, password, done) => {
//     app.locals.users.findOne({ username }, (err, user) => {
//       if (err) {
//         return done(err);
//       }
//       if (!user) {
//         return done(null, false);
//       }
//       console.log(user.password);
//       console.log(password);
//       if (user.password != password) {
//         return done(null, false);
//       }
//       return done(null, user);
//     });
//   })
// );

Passport.serializeUser((user, done) => {
  done(null, user._id);
});

Passport.deserializeUser((id, done) => {
  done(null, { id });
});

//const PORT = process.env.PORT || 3001;

// view engine setup
// app.engine("pug", require("pug").__express);
// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "pug");
//
//
//
// app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/auth", authRouter);

//app.use(cookieParser());
app.use(express.static(path.join(__dirname, "reactapp/build")));

// // catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   next(createError(404));
// });
//
// // error handler
// app.use(function (err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get("env") === "development" ? err : {};
//
//   // render the error page
//   res.status(err.status || 500);
//   res.render("error");
// });
//
//
// // app.listen(PORT, () => {
// //   console.log(`App listening on port ${PORT}.`);
// // });

module.exports = app;
