import React, { Component } from 'react';
import Product from './Product';
import {ProductConsumer} from '../context';


class AllProduct extends Component {
    
    render() {
        return (
            <React.Fragment>
                <div className='py-5'>
                    <div className='container'>
                        <h3 className='our-products'>Our Vegetables</h3>
                        <div className='row'>
                            <ProductConsumer>
                                {value => {
                                    return value.products.map(product => {
                                        return <Product key={product.id} product={product}/>})
                                }
                                }                          
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default AllProduct;