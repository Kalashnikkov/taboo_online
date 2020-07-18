import React from 'react';
import { HomePage } from './pages/homePage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>  
          <HomePage/>
    </Router>
  );
}

export default App;
