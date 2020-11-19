import './App.css';
import {Switch , Route} from 'react-router-dom';
import React, { Component } from 'react'
import Navigation from './components/Navigation';
import EveryProduct from './components/EveryProduct';
import Details from './components/Details';
import MainCart from './cart/MainCart';
import FinalPage from './FinalPage';
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navigation />
        <Switch>
        <Route exact path='/' component={EveryProduct} />
          <Route path='/details' component={Details} />
          <Route path='/cart' component={MainCart} />
          <Route path='/buy' component={FinalPage} />
          </Switch>
      </React.Fragment>
    )
  }
}
export default App;
