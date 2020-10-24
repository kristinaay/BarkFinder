import React from "react";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="navbar">
          <button type="button">Sign Up</button>
          <button type="button">Sign In</button>
        </div>
        <section id="section1">
          <div className="main">
            <header>
              Ready to meet your new best friend?
              <br />
              Join BarkFinder today!
              <a href="#section2">
                <span></span>Scroll
              </a>
            </header>
          </div>
        </section>
        <section id="section2">
          <a href="#section1">
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

export default App;
