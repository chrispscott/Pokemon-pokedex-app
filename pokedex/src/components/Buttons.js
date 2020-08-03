import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Pokepage1 from "./Pokepage1";
import Home from './Home';
export default function App() {
  return (
      <div>
    <Router>
        <div>
      
            <button className='btn'>
              <Link exact to="Home">Home</Link>
            </button>
            <button className='btn'>
              <Link exact to="Pokepage1">page 2</Link>
            </button>
            <button className='btn'>
              page3
            </button>
          
        <Switch>
          <Route path="./Home">
            <Home />
          </Route>
          <Route path="./Pokepage1">
            <Pokepage1 />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}