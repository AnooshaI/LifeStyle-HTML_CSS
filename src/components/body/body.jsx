import React, { Component } from 'react'
import { BrowserRouter as Router,Route, Switch} from 'react-router-dom'
import { Home } from '../home/home'
export class Body extends Component {
    render() {
        return (
            <div>
                <Router>
                <Switch>
                    <Route exact path='/' component={Home}/>
                </Switch>
                </Router>
            </div>
        )
    }
}

export default Body
