import './App.css';
import {Switch , Route} from 'react-router-dom';
import React, { Component } from 'react'
import Navigation from './components/Navigation';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Default from './components/Default';
import Cart from './components/Cart';
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navigation />
        <Switch>
        <Route exact path='/' component={ProductList} />
          <Route path='/details' component={Details} />
          <Route path='/cart' component={Cart} />
          
          <Route component={Default} />
          </Switch>
      </React.Fragment>
    )
  }
}
export default App;
