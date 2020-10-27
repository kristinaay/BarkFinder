import React from "react";
import { Helmet } from "react-helmet";
import "./sign_in.css";
import "bootstrap/dist/css/bootstrap.min.css";

class SignIn extends React.Component {
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
          <title>Sign In</title>
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap"
            rel="stylesheet"
          />

          <link rel="stylesheet" href="./sign_in.css" />
          <link rel="icon" type="image/png" href="Images/favicon.png" />
        </Helmet>
        <div className="SignIn">
          <div className="container-fluid d-flex justify-content-center">
            <div className="card">
              <div className="card-header">
                <h3>Sign In</h3>
              </div>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label for="inputUserName">Username</label>
                    <input
                      type="text"
                      id="inputUserName"
                      className="form-control"
                      placeholder="Alice"
                    />
                  </div>
                  <div className="form group">
                    <label for="inputPassword">Password</label>
                    <input
                      type="password"
                      id="inputPassword"
                      className="form-control"
                      placeholder="123abc"
                    />
                  </div>
                  <div className="form-group">
                    <a
                      href="/app.js"
                      input
                      type="submit"
                      className="btn btn-dark"
                      style={{ marginTop: "10px" }}
                    >
                      Sign In
                    </a>
                  </div>
                </form>
              </div>
              <div className="card-footer">
                <div>
                  <a href="sign_up.html">Sign up here</a>
                </div>
                <div>
                  <a href="index.html">Cancel and return home</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;
