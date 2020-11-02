const express = require("express");
const path = require("path");
const indexRouter = require("./myapp/routes");
const usersRouter = require("./myapp/routes/users");
const authRouter = require("./myapp/routes/auth");
const flash = require("connect-flash");
const Session = require("express-session");
const Passport = require("passport");
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

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.locals.loggedIn = req.isAuthenticated();
  next();
});

Passport.serializeUser((user, done) => {
  done(null, user._id);
});

Passport.deserializeUser((id, done) => {
  done(null, { id });
});

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/auth", authRouter);

app.use(express.static(path.join(__dirname, "reactapp/build")));

module.exports = app;
