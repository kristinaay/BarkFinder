import React from "react";
import { Helmet } from "react-helmet";
import SignIn from "./sign_in.js";
import Home from "./home.js";
import SignUp from "./sign_up.js";
import Dogs from "./dogs.js";
import Table from "./table.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" exact component={Home} />
          <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={SignIn} />
          <Route path="/dogs" component={Dogs} />
          <Route path="/table" component={Table} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
