import React from "react";
import "./home.css";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

class Home extends React.Component {
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
          <title>Home</title>
          <link
            href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="./home.css" />
          <link rel="icon" type="image/png" href="Images/favicon.png" />
        </Helmet>
        <div className="navbar">
          <Link to="/signup">
            <button type="button">Sign Up</button>
          </Link>
          <Link to="/signin">
            <button type="button">Sign In</button>
          </Link>
        </div>
        <section id="section1">
          <div className="main">
            <header>
              Ready to meet your new best friend?
              <br />
              Join BarkFinder today!
              <a class="scroll" href="#section2">
                <span></span>Scroll
              </a>
            </header>
          </div>
        </section>
        <section id="section2">
          <a className="scroll" href="#section1">
            <span></span>Scroll
          </a>
          <div className="main" id="second">
            <header>How does it work?</header>
            <p>
              PupFinder takes your preferences and our algorithm to match you to
              your perfect dog! We take dogs from foster homes all over the Bay
              Area and bring them right to your fingertips in the comfort of
              your own home. So once you've created an account and entered your
              preferences, you can sit back, relax, and let us bring your future
              dog right to your computer.
            </p>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
