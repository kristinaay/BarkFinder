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

// async function find(username) {
//   console.log("find function");
//   const users = await myDB.initializeUsers();

//   let bool = await users.findOne({ username: username }, function (err, user) {
//     if (err) {
//       console.log("user not found");
//       return false;
//     }
//     if (user) {
//       console.log("user found");
//       return true;
//     } else {
//       return false;
//     }
//   });
//   return bool;
// }

router.post("/signup", async (req, res, next) => {
  const registrationParams = req.body;

  const users = await myDB.initializeUsers();
  // let invalidUsername = await find(users, registrationParams.username);

  // console.log(invalidUsername);

  if (
    registrationParams.password != registrationParams.password2 ||
    registrationParams.username == "" ||
    registrationParams.pasword == ""
  ) {
    req.flash("error", "Passwords do not match.");
    res.redirect("/signup");
  } else {
    const payload = {
      username: registrationParams.username,
      password: authUtils.encrypt(registrationParams.password),
    };

    users.findOne({ username: registrationParams.username }, function (
      err,
      user
    ) {
      if (err) {
        console.log("user not found");
        return next(err);
      }
      if (user) {
        console.log("user found");
        res.redirect("/signup");
      } else {
        users.insertOne(payload, (err) => {
          if (err) {
            req.flash("error", "User account already exists.");
          } else {
            req.flash("success", "User account registered successfully.");
          }
        });
        console.log(req.flash());
        console.log("done");
        res.redirect("/signin");
      }
    });
  }
});

router.post("/signout", (req, res, next) => {
  req.session.destroy();
  res.redirect("/");
});

router.post("/update", async (req, res, next) => {
  const users = await myDB.initializeUsers();
  const info = req.body;
  console.log(req.body);
  console.log(info.username);
  console.log(info.newusername);
  console.log(info.newpassword);
  console.log("update method");

  if (!req.isAuthenticated()) {
    res.redirect("/signin");
  } else {
    users.findOne({ username: info.username }, function (err, user) {
      if (err) {
        console.log("user not found");
        return next(err);
      }
      if (!user) {
        console.log("user not found - update");
        res.redirect("/userprofile");
      } else {
        console.log("update");
        users.updateOne(
          {
            username: info.username,
          },
          {
            $set: {
              username: info.newusername,
              password: authUtils.encrypt(info.newpassword),
            },
          }
        );

        res.redirect("/table");
      }
    });
  }
});

router.post("/delete", async (req, res, next) => {
  const users = await myDB.initializeUsers();
  const info = req.body;
  console.log(req.body);
  console.log(info.delete);

  if (!req.isAuthenticated()) {
    res.redirect("/signin");
  } else {
    users.findOne({ username: info.delete }, function (err, user) {
      if (err) {
        console.log("user not found");
        return next(err);
      }
      if (!user) {
        console.log("user not found - delete");
        res.redirect("/userprofile");
      } else {
        users.deleteOne({
          username: info.delete,
        });
        res.redirect("/");
      }
    });
  }
});

module.exports = router;
