import React from 'react'
import './Avatar.css'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import CustomerManagement from './CustomerManagement';
import Customer from './Customer'
import axios from 'axios'
import CustomerSave from './CustomerSave';
import ProductManagement from './ProductManagement';
import ProductSave from './ProductSave';

const Avatar = (props) => {

    return (
        <Router>
            <div className= "app-header">
                <div className="avatar-box">
                    <img alt="Avatar" src={props.url} className = "avatar-img" />
                    <div className="container">
                        <h4><b>{props.alias}</b></h4>
                    </div>
                    <div className="app-links">
                        <div><Link to={'/'}>Home</Link></div>
                        <div><Link to={'/'}>Customers</Link></div>
                        <div><Link to={'/saveCustomer'}>Save Customer</Link></div>
                        <div><Link to={'/products'}>Products</Link></div>
                        <div><Link to={'/saveProduct'}>Save Product</Link></div>
                    </div>
                </div>
                
                <div>
                    <Switch>
                        <Route exact path="/" component={CustomerManagement}/>
                        <Route exact path="/" component={CustomerManagement}/>
                        <Route path="/saveCustomer/:customerId?" component={CustomerSave}/>
                        <Route exact path="/products" component={ProductManagement}/>
                        <Route path="/saveProduct/:productId?" component={ProductSave}/>
                    </Switch>
                </div>
            </div>
        </Router>
    )
}

export default Avatar