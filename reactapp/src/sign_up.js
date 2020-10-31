import React from "react";
import "./sign_up.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class SignUp extends React.Component {
  render() {
    return (
      <div>
        <div className="SignUp">
          <div className="container-fluid d-flex justify-content-center">
            <div className="card">
              <div className="card-header">
                <h3>Sign Up</h3>
              </div>
              <div className="card-body">
                <form action="/auth/signup" method="POST">
                  <div className="form-group">
                    <label for="username">Username</label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      className="form-control"
                      placeholder="Alice"
                    />
                  </div>

                  <div className="form-group">
                    <label for="password">Password</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      className="form-control"
                      placeholder="123abc"
                    />
                  </div>
                  <div className="form group">
                    <label for="password2">Verify Password</label>
                    <input
                      type="password"
                      id="password2"
                      name="password2"
                      className="form-control"
                      placeholder="123abc"
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="submit"
                      className="btn btn-dark"
                      style={{ marginTop: "10px" }}
                      value="Sign Up"
                    />
                  </div>
                  <div className="form-group">
                    Already an user? <Link to="/signin">Sign In</Link>
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
