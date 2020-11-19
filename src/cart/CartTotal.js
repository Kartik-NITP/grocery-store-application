import React from 'react'
import {Link} from 'react-router-dom'


function CartTotal({value}) {
    const { cartTotal, clearCart} = value;
    return (
    <React.Fragment>
        <div className="container">
            <div className="row">
                <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                    <Link to="/">
                        <button 
                        className="btn btn-outline-danger text-uppercase mb-3 px-5"
                        type="button"
                        onClick={()=>clearCart()}>
                            clear cart
                        </button>
                    </Link>
                    
                        
                    <h5>
                        <span className="text-title">
                            total: 
                        </span>
                        <strong>₹{cartTotal}</strong>
                    </h5>
                    <Link to='/buy'>
                        <button className='btn btn-outline-success mb-3 px-3' type='button' onClick={()=>clearCart()}>Buy</button>
                    </Link>
                    
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}
export default CartTotal;