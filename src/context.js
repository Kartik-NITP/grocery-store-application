import React, { Component } from 'react'
import {Data,ProductData} from './data';
const ProductContext  = React.createContext();
class ProductProvider extends Component {
    state = {
        products:Data,
        dataOfProducts:ProductData,
        cart:[]
        
    };
    getProduct = (id) => {
        const product = this.state.products.find(item=>item.id===id);
        return product;
    }
    handleDetail = (id) => {
        
        const product = this.getProduct(id);
        this.setState(()=>{return {dataOfProducts:product};})
            
        
    }
    addToCart = (id) => {
        const product = this.getProduct(id);
        product.inCart = true;
        product.temp = 1;
        product.totalPrice = product.price;
        this.setState(()=>{return{cart:[...this.state.cart,product]}},()=>console.log(...this.state.cart))
        }
    plus = (id) => {
       let tempCart = [...this.state.cart] 
       const selectedProduct = tempCart.find(item=>item.id === id);
       const index = tempCart.indexOf(selectedProduct);
       const product = tempCart[index];
       product.temp = product.temp + 1;
       product.totalPrice = product.temp * product.price;
       this.setState(()=>{return{cart:[...tempCart]};})
    }
    minus = (id) => {
        
    }
   
    remove = (id) => {
        const product = this.state.products.find(item => item.id === id);
        product.inCart = false;
        product.temp = 0;
        product.totalPrice = 0;
        this.setState(()=>{return {dataOfProducts:product};})
    }
    render() {
        return (
            <ProductContext.Provider value={{...this.state, handleDetail:this.handleDetail, addToCart:this.addToCart,plus:this.plus,minus:this.minus,remove:this.remove}}>
                {this.props.children}
                
            </ProductContext.Provider>
        );
    }
}
const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
