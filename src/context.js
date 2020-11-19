import React, { Component } from 'react'
import {Data,DetailedProduct} from './data';
const ProductContext  = React.createContext();
class ProductProvider extends Component {
    state = {
        products:Data,
        detailOfProducts:DetailedProduct,
        cart:[],
        cartTotal:0
        
    };
    getSelectedProduct = (id) => {
        const product = this.state.products.find(item=>item.id===id);
        return product;
    }
    handleDetail = (id) => {
        const product = this.getSelectedProduct(id);
        this.setState(()=>{return {detailOfProducts:product};})
}
    componentDidMount(){
      this.setProducts();
    }
  
    setProducts = () => {
      let tempProducts = [];
      Data.forEach(item=> {
        const singleItem = {...item};
        tempProducts = [...tempProducts, singleItem];
      })
      this.setState(()=> {
        return {products: tempProducts};
      })
    }
    addToCart = (id) => {
        const product = this.getSelectedProduct(id);
        product.inCart = true;
        product.temp = 1;
        product.totalPrice = product.price;
        this.setState(()=>{return{cart:[...this.state.cart,product]}},()=>{this.addTotals();})
        }
    plus = (id) => {
       let tempCart = [...this.state.cart] 
       const selectedProduct = tempCart.find(item=>item.id === id);
       const index = tempCart.indexOf(selectedProduct);
       const product = tempCart[index];
       product.temp = product.temp + 1;
       product.totalPrice = product.temp * product.price;
       this.setState(()=>{return{cart:[...tempCart]};},()=>{this.addTotals();})
    }
    minus = (id) => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item=>item.id === id);
    
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        product.temp = product.temp -1;
    
        if(product.temp === 0){
          this.remove(id);
        }else {
          product.totalPrice = product.temp * product.price;
          this.setState(
            ()=>{
              return {cart: [...tempCart]};
            },()=>{this.addTotals();
            }
          )
        }
      }
    
   
    remove = (id) => {
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];
    tempCart = tempCart.filter(item=>item.id!==id);
    const index = tempProducts.indexOf(this.getSelectedProduct(id));
    let removedProduct = tempProducts[index];
    removedProduct.inCart = false;
    removedProduct.temp = 0;
    removedProduct.totalPrice = 0;

    this.setState(()=>{
      return {
        cart: [...tempCart],
        products: [...tempProducts]
      }
    },()=>{this.addTotals();})
  }
  
  clearCart = () => {
    
    this.setState(()=> {
      return {cart:[]};
    },()=>{this.addTotals();})
    this.setProducts();
  }

  addTotals = () => {
      let subTotal = 0;
      this.state.cart.map(item => (subTotal = subTotal + item.totalPrice));
      const total = subTotal;
      
      this.setState(()=>{
        return {
          cartTotal: total
        }
      })
  }

render() {
        return (
            <ProductContext.Provider value={{...this.state, handleDetail:this.handleDetail, addToCart:this.addToCart,plus:this.plus,minus:this.minus,remove:this.remove,clearCart:this.clearCart,addTotals:this.addTotals}}>
                {this.props.children}
                
            </ProductContext.Provider>
        );
    }
}
const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
