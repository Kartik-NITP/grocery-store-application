import React, { Component } from 'react'
import {Link} from 'react-router-dom';

class FinalPage extends Component {
    render() {
        return (
            <div>
                <h2>Successfully Purchased</h2>
                <Link to='/'>
                    <button>Back to Products</button>
                </Link>
            </div>
        )
    }
}
export default FinalPage;