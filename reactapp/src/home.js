import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="navbar">
        <Link to="/dogs">
          <button type="button">Dog Preview</button>
        </Link>
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
            We take dogs from foster homes all over the Bay Area and bring them
            right to your fingertips in the comfort of your own home. So once
            you've created an account, you can sit back, relax, and let us bring
            your future dog right to your computer.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;
