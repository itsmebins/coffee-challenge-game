import React , { Component } from 'react';
import { Route, Switch} from 'react-router-dom';
import EndpointTest from './components/EndpointTest.js';
import CoffeeGame from './components/CoffeeGame.js';

class Routes extends Component {
  render() {
    return (
     <div>
       <Switch>
         <Route exact path="/endpoint-test" name="Login Page" component={EndpointTest}/>
         <Route exact path="/coffee-game" name="Public sign up Page" component={CoffeeGame}/>
         <Route path="/" name="Home"  component={EndpointTest}/>
       </Switch>
     </div>
    );
  }
}

export default Routes;
