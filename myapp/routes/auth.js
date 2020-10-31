const express = require("express");
const router = express.Router();
const Passport = require("passport");
const myDB = require("../db/myMongoDB.js");
const app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const Strategy = require("passport-local").Strategy;
const flash = require("connect-flash");
const authUtils = require("../utils/auth");
const Session = require("express-session");

app.use(flash());
app.use(Passport.initialize());
app.use(Passport.session());

router.get("/signin", (req, res, next) => {
  const messages = req.flash() || ["Invalid username or password."];
  res.render("signin", { messages });
  // res.render("../../reactapp/sign_in.js", function (err, html) {
  //   res.send(html);
  // });
});

const MongoClient = require("mongodb").MongoClient;
const uri = process.env.MONGO_URL || "mongodb://localhost:27017";

Passport.use(
  new Strategy(
    { passReqToCallback: true },
    async (req, username, password, done) => {
      const client = new MongoClient(uri, { useUnifiedTopology: true });
      await client.connect();
      //database
      const db = await client.db("db");
      const users = db.collection("users");

      users.findOne({ username }, (err, user) => {
        if (err) {
          return done(err);
        }

        if (!user) {
          return done(null, false);
        }
        console.log(user.password);
        console.log(authUtils.decrypt(user.password));
        console.log(password);
        let newPass = authUtils.decrypt(user.password);
        if (password != newPass) {
          return done(null, false);
        }

        return done(null, user);
      });
    }
  )
);

Passport.serializeUser((user, done) => {
  done(null, user._id);
});

Passport.deserializeUser((id, done) => {
  done(null, { id });
});

router.post(
  "/signin",
  Passport.authenticate("local", {
    failureFlash: true,
    failureRedirect: "/signin",
    messages: flash("Invalid username or password"),
  }),
  (req, res, next) => {
    res.redirect("/table");
  }
);

router.get("/signup", (req, res, next) => {
  const messages = req.flash();
  res.render("signup", { messages });
});

router.post("/signup", async (req, res, next) => {
  const users = await myDB.initializeUsers();
  const registrationParams = req.body;
  console.log(req.body);
  console.log(registrationParams.password);
  if (registrationParams.password != registrationParams.password2) {
    req.flash("error", "Passwords do not match.");
    res.redirect("/signup");
  } else {
    const payload = {
      username: registrationParams.username,
      password: authUtils.encrypt(registrationParams.password),
    };

    console.log(payload);

    // users.findOne({ username: registrationParams.username }, function (
    //   err,
    //   user
    // ) {
    //   if (err) {
    //     return next(err);
    //   }
    //   if (user) {
    //     req.flash("error", "User already exists");
    //     res.redirect("/auth/signup");
    //   }
    // });

    users.insertOne(payload, (err) => {
      if (err) {
        req.flash("error", "User account already exists.");
      } else {
        req.flash("success", "User account registered successfully.");
      }
    });
    console.log("done");
    res.redirect("/signin");
  }
});

router.get("/signout", (req, res, next) => {
  req.session.destroy();
  res.redirect("/");
});

module.exports = router;
