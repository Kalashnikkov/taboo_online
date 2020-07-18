import React, { useState } from "react";
import { HomePage } from "./pages/homePage";
import { PlayPage } from "./pages/playPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { LandingPage } from "./pages/landingPage";

function App() {
  return (
    <Router>
      <Switch>
        <LandingPage exact path="/" />
        <HomePage exact path="/taboo/" />
        <PlayPage exact path="/taboo/:id" />
      </Switch>
    </Router>
  );
}

export default App;
