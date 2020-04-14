import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Boards from "./pages/boards/Boards";
import BoardDetail from "./pages/boards/detail/BoardDetail";

export default function App() {
  return (
    <Router>
      <div>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />

        <Switch>
          <Route path="/b/:id/:title" component={BoardDetail}></Route>
          <Route exact path="/">
            <Boards />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function About() {
  return <h2>About</h2>;
}
