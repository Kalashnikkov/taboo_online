import React from 'react';
import { HomePage } from './pages/homePage';
import { PlayPage } from './pages/playPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <HomePage exact path='/'/>
        <PlayPage exact path='/:id'/>
      </Switch>
    </Router>
  );
}

export default App;
