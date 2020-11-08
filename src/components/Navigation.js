import React, { Component } from 'react';
import {Navbar,NavbarToggler,Collapse} from 'reactstrap';
import {Link,NavLink} from 'react-router-dom';
class Navigation extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isNavOpen:false
        };
        this.toggleNav = this.toggleNav.bind(this);
    }
    toggleNav(){
        this.setState({isNavOpen:!this.state.isNavOpen});
    }
    
    render() {
        return (
            <React.Fragment>
                <Navbar dark expand='md'>
                   <NavbarToggler onClick={this.toggleNav} />
                    <div className='navi-logo mr-auto'>
                        <Link to='/'>
                            <img src='title.png' alt='logo' height='60' width='60'></img>
                        </Link>
                    </div>
                    <div className='navi-title mr-auto'>
                        <h2>Welcome to grocery store</h2>
                    </div>
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                   <div className='navi-product ml-auto'><Link className='navi-text' to='/'>Products</Link></div>
                   <div className='navi-cart'><Link to='/cart' >
                       <span className='fa fa-cart-plus'>My Cart</span>
                       </Link></div>
                   
                   </Collapse>
                    
                    


                </Navbar>
            </React.Fragment>

            
        )
    }
}
export default Navigation;