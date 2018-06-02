import React from 'react'
import './Avatar.css'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import App from './App';
import CardManagement from './CardManagement';
import TermAndCondition from './TermAndCondition';

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
                        <div><Link to = {'/'}>Home</Link></div>
                        <div><Link to='/terms/1'>Terms</Link></div>
                    </div>
                </div>
                <div>
                    <Switch>
                        <Route exact path = '/' component = {CardManagement} />
                        <Route 
                            path = '/terms/:termId?' 
                            render = { (p) => <TermAndCondition 
                                                terms={props.terms} 
                                                history = {p.history}
                                                params = {p.match.params}
                                              />}
                        />
                    </Switch>
                </div>
            </div>
        </Router>  
    )
}

export default Avatar