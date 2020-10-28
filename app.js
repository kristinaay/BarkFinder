// const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
//var logger = require("morgan");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

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