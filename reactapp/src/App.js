import React from "react";
import SignIn from "./sign_in.js";
import Home from "./home.js";
import SignUp from "./sign_up.js";
import Dogs from "./dogs.js";
import Table from "./table.js";
import UserProfile from "./userprofile.js";
import DogPage from "./dogpage.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={SignIn} />
          <Route path="/dogs" component={Dogs} />
          <Route path="/table" component={Table} />
          <Route path="/userprofile" component={UserProfile} />
          <Route path="/dogpage" component={DogPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
