import './App.css';
import {Switch , Route} from 'react-router-dom';
import React, { Component } from 'react'
import Navigation from './components/Navigation';
import AllProduct from './components/AllProduct';
import Details from './components/Details';
import Default from './components/Default';
import MyCart from './components/MyCart';
import FinalPage from './FinalPage';
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navigation />
        <Switch>
        <Route exact path='/' component={AllProduct} />
          <Route path='/details' component={Details} />
          <Route path='/cart' component={MyCart} />
          <Route path='/buy' component={FinalPage} />
          <Route component={Default} />
          </Switch>
      </React.Fragment>
    )
  }
}
export default App;
