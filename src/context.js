import React, { Component } from 'react'
import {Data,ProductData} from './data';
const ProductContext  = React.createContext();
class ProductProvider extends Component {
    state = {
        products:Data,
        dataOfProducts:ProductData 
    };
    handleDetail = (id) => {
        
        const product = this.state.products.find(item=> item.id === id);
        this.setState(()=>{return {dataOfProducts:product};})
            
        
    }
    addToCart = (id) => {
        const product = this.state.products.find(item => item.id === id);
        product.inCart = true;
        product.temp = product.temp + 1;
        console.log(product.temp);
        console.log(id);
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
