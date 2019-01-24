import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Clock from './clock';
import Counter from './counter';

export default class ProductPage extends React.Component {
    render() {
        const { match } = this.props
        return (
            <Router>
                <div>
                <ul>
                    <li>
                        <Link to="/">Accueil</Link>
                    </li>
                    <li>
                        <Link to="/clock">Clock</Link>
                    </li>
                    <li>
                        <Link to="/counter">Counter</Link>
                    </li>
                </ul>
                    
                    <Route path={'${match.url}/clock'} component={Clock} />
                    <Route path={'${match.url}/Counter'} component={Counter} />
                </div>
            </Router>
        )
    }
}