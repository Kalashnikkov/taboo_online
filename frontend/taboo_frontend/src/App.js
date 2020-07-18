import React, { useState } from "react";
import { HomePage } from "./pages/homePage";
import { PlayPage } from "./pages/playPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [name, setName] = useState("");

  return (
    <Router>
      <Switch>
        <HomePage exact path="/" setName={setName} />
        <PlayPage exact path="/:id" name={name} />
      </Switch>
    </Router>
  );
}

export default App;
