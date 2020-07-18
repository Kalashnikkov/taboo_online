import React, { useState } from "react";
import { HomePage } from "./pages/homePage";
import { PlayPage } from "./pages/playPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { LandingPage } from "./pages/landingPage";

function App() {
  const [name, setName] = useState("");

  return (
    <Router>
      <Switch>
        <LandingPage exact path="/" />
        <HomePage exact path="/taboo/" setName={setName} />
        <PlayPage exact path="/taboo/:id" name={name} />
      </Switch>
    </Router>
  );
}

export default App;
