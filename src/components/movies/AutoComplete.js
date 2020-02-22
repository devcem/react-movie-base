import React, { Component} from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Login from '../layout/Login';

export default class AutoComplete extends Component {
    state = {
    }
    
    componentDidMount() {
        
    }
    
    render() {
        return(
            <div className="dropdown">
                <div className="dropdown-menu">
                  <div className="dropdown-content results"></div>
                  <Router className="show-more">
                    <Link to="/Login">Login</Link>
                    <Route path="/Login" component={Login} />
                </Router>
                </div>
            </div>
        )
    }
}