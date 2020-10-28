import React from "react";
import "./sign_in.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function SignIn() {
  return (
    <div>
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
                <Link to="/signup">Sign up here</Link>
              </div>
              <div>
                <Link to="/">Cancel and return home</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
