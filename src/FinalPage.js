import React, { Component } from 'react'
import {Link} from 'react-router-dom';

class FinalPage extends Component {
    render() {
        return (
            <div>
                <h4 className='text-center mt-4 hvr-pulse'>Successfully Purchased <span className='fa fa-check-circle'></span></h4>
                <div className='container'>
                <Link to='/'>
                    
                    <button className='btn btn-outline-primary col-5 col-sm-4 col-md-3 col-lg-2 buy-page-products-button mt-5' type='button'>Back to Products</button>
                    
                </Link></div>
            </div>
        )
    }
}
export default FinalPage;