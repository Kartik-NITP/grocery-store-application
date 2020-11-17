import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import { ProductConsumer } from '../context';


class Product extends Component {
    
    render() {
        const {id,name,img,price,inCart} = this.props.product;
        return (
            <div className='col-7 mx-auto col-md-6 col-lg-3 my-4'>
                <div className='card'>
                    <ProductConsumer>
                    {(value)=> (
                <div
                  className="img-container p-4"
                  onClick= {()=>value.handleDetail(id)}
                  
                >
                  <Link to="/details">
                    <img src={img} alt="product" height='150' width='30' className="card-img-top" />
                  </Link>

                  <button
                    className="card-btn"
                    disabled={inCart ? true : false}
                    onClick={() => {
                      value.addToCart(id);
                      
                      
                      
                    }}
                  >
                  {inCart ? (
                    <p className="text-capitalize mb-0 my-font" disabled>
                      In Cart
                    </p>
                  ) : (
                    <h5 className='my-font'>Add to Cart</h5>
                  )}
                  </button>
                </div>
              )}
                    </ProductConsumer>
                    <div className="card-footer d-flex justify-content-between">
              <p className="align-self-center mb-0 my-font">
                {name}
              </p>
              <h4 className="mb-0 my-font">
                <span className="mr-0">₹</span>
                {price}/kg
              </h4>
          </div>
        </div>
                </div>

            
        )
    }
}

export default Product;
