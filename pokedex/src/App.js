import React from 'react';
import './App.css';
import Home  from "./components/Home";
import { Switch, Route } from 'react-router-dom';
import Pokestat from './components/Pokepage1';


function App() {
  return (
    <div className='home__container' className="App">
      <Switch>
        <Route exact path="/" render = {(props) => <Home {...props}/>}/>
        <Route exact path="/" render={(props) => <Pokestat {...props}/>}/>
      </Switch>
    </div>
  );
}

export default App;
