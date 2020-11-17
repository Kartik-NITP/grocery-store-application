import React, { Component } from 'react'

class Empty extends Component {
    render() {
        return (
            <div className='hvr-grow-shadow'>
                <h3 className='empty-cart'>Nothing to Buy, Please add some items</h3>
            </div>
        )
    }
}

export default Empty;
