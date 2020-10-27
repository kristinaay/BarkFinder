import React from "react";
import { Helmet } from "react-helmet";
import "./sign_up.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class SignUp extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <html lang="en" />

          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Sign Up</title>
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap"
            rel="stylesheet"
          />

          <link rel="stylesheet" href="./sign_up.css" />
          <link rel="icon" type="image/png" href="Images/favicon.png" />
        </Helmet>
        <div className="SignUp">
          <div className="container-fluid d-flex justify-content-center">
            <div className="card">
              <div className="card-header">
                <h3>Sign Up</h3>
              </div>
              <div className="card-body">
                <form method="POST" action="/post_sign_up">
                  <div className="form-group">
                    <label for="inputUserName">Username</label>
                    <input
                      type="text"
                      id="inputUserName"
                      className="form-control"
                      placeholder="Alice"
                    />
                  </div>

                  <div className="form-group">
                    <label for="inputPassword">Password</label>
                    <input
                      type="text"
                      id="inputPassword"
                      className="form-control"
                      placeholder="123abc"
                    />
                  </div>
                  <div className="form group">
                    <label for="inputPassword">Verify Password</label>
                    <input
                      type="password"
                      id="inputPassword2"
                      className="form-control"
                      placeholder="123abc"
                    />
                  </div>

                  <div className="form-group">
                    <a
                      href="./app.js"
                      input
                      type="submit"
                      className="btn btn-dark"
                      style={{ marginTop: "10px" }}
                    >
                      Sign Up
                    </a>
                  </div>
                  <div className="form-group">
                    Already an user? <a href="sign_in.html">Sign In</a>
                    <br />
                    <Link to="/">Cancel and return home</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
