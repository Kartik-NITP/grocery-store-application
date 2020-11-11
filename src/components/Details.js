import React, { Component } from 'react'
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import Product from './Product';

class Details extends Component {
    render() {
        return (
            <ProductConsumer>
        {
          (value)=>{
            const {id, img, info, price, name, inCart} = 
            value.dataOfProducts;
            
            return (
                <div>
                  <div className="col-10 detail-title mt-4">
                    <h1>
                      {name}
                    </h1>
                  </div>
                  <div className="container">
                    <div className="col-10 col-md-5 mt-4">
                        <img src={img} className="img-fluid card-img-top" alt="product"/>
                    </div>
                    <div className="col-10 col-md-5 ">
                      
                      <h4>
                        <strong className='detail-price'>
                          Price is: <span>₹</span>{price}
                        </strong>
                      </h4>
                      <p className=" mt-3 mb-0 information">
                          Information about the product:
                      </p>
                      <p className="lead">
                        {info}
                      </p>
                      <div>
                        <Link to="/">
                          <button className='mr-3 mb-5'>
                            Back to products
                          </button>
                        </Link>
                          
                      </div>
                    </div>
                  </div>
                </div>
            );

          }
        }
      </ProductConsumer>
        )
    }
}
export default Details;