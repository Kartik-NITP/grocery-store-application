import React, { Component } from 'react'

class CartHeading extends Component {
    render() {
        return (
            <div className='container-fluid text-center d-none d-lg-block'>           <div className='row my-2 text-center'>
                
        <div className='col-10 mx-auto col-lg-2'>
          Image
        </div>
        <div className='col-10 mx-auto col-lg-2'>
          Item
        </div>
        <div className='col-10 mx-auto col-lg-2'>
          Price
        </div>
        <div  className='col-10 mx-auto col-lg-2'>
          Quantity
        </div>
        <div className='col-10 col-lg-2 mx-auto'>
          Remove
        </div>
        <div className='col-10 mx-auto col-lg-2'>
           Amount
        </div>
      </div>
            </div>
 
        )
    }
}
export default CartHeading;