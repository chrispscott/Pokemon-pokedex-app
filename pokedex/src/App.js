import React from 'react';
import './App.css';
import Home  from "./components/Home";
import Nav from './components/Nav';
import Pokepage1 from './components/Pokepage1';
import Favorites from './components/Favorites';
import Pokepage3 from './components/Pokepage3';
import Buttons from './components/Buttons';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  return (
    <div className='home__container' className="App">
  
      <Router>
        <div>
      
            <button className='btn'>
              <Link exact to="./Home">Home</Link>
            </button>
            <button className='btn'>
              <Link exact to="./Pokepage1">page 2</Link>
            </button>
            <button className='btn'>
            <Link exact to="./Pokepage3">page 3</Link>
            </button>
            <button className='btn'>
            <Link exact to="./Favorites">FanArt</Link>
            </button>
          
        <Switch>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/Pokepage1">
            <Pokepage1 />
          </Route>
          <Route path="/Pokepage3">
            <Pokepage3 />
          </Route>
          <Route path="/Favorites">
            <Favorites />
          </Route>
          
        </Switch>
      </div>
    </Router>
      
    </div>
  );
}

export default App;
