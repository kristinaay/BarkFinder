import React from "react";
import "./dogpage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function DogPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const error = urlParams.get("error");
  return (
    <div className="dogpage">
      <div className="container-fluid d-flex justify-content-center">
        <div className="usercard2">
          <div className="card-header">
            <h3>Send a heart to your favorite dog!</h3>
          </div>
          <div className="card-body">
            <form id="send" action="/auth/updateLike" method="post">
              <div className="form-group">
                <label for="dogname">Name of the dog:</label>
                <input
                  type="text"
                  id="dogname"
                  name="dogname"
                  className="form-control"
                  placeholder="Kiara"
                />
              </div>

              {error ? <div className="danger">{error}</div> : ""}
              <div className="submitButtons">
                <div className="form-group">
                  <input
                    type="submit"
                    className="buttons"
                    value="Send Heart!"
                  />
                </div>
              </div>
            </form>
            <div className="form-group">
              <Link to="/table">Cancel and return to previous page.</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DogPage;
