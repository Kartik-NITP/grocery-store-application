import React, { Component } from 'react'
import {ProductConsumer} from '../context';
import Empty from './Empty';
import CartList from './CartList';
import CartHeading from './CartHeading';
import CartTotal from './CartTotal'

class MyCart extends Component {
    
    render() {
        
        return (
            
            <div>
                <h2 className='detail-title mt-4 mb-4'>Your Selected Items</h2>
                
                <ProductConsumer>
                    {
                        value => {const {cart} =  value;
                        if(cart.length > 0){
                        return(
                            <React.Fragment>
                            <CartHeading />
                            <hr className='hr-color' />
                            <CartList value={value} />
                            <CartTotal value={value} />
                            </React.Fragment>
                        );}
                        else{
                            return <Empty />
                        }
                        }}
        

                      
                    
                
                </ProductConsumer>
            </div>
        )
    }
}
export default MyCart;