import React, { Component } from 'react'
import {Data} from './data';
const ProductContext  = React.createContext();
class ProductProvider extends Component {
    state = {
        products:Data
    };
    handleDetail = () => {
        console.log("hello from detail");
    }
    addToCart = () => {
        console.log('add to cart');
    }
    render() {
        return (
            <ProductContext.Provider value={{...this.state, handleDetail:this.handleDetail, addToCart:this.addToCart}}>
                {this.props.children}
                
            </ProductContext.Provider>
        );
    }
}
const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
