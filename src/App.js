import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Main from "./components/Main";
import MovieDetails from "./components/MovieDetails.js";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/details/:movieId" component={MovieDetails} />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
}

export default App;
