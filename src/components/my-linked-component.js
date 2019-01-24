import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Clock from "./clock";
import MyStyledComponent from "./my-styled-component";
import Counter from './counter';



export default class NewLink extends React.Component {
    
    render() {
        
        return (
            <Router>
                <div>
                <ul>
                    <li>
                        <Link to="/">Accueil</Link>
                    </li>
                    <li>
                        <Link to="/styled">Pretty</Link>
                    </li>
                    <li>
                        <Link to="/clock">Clock</Link>
                    </li>
                </ul>
                
                <Route path="/styled" component={MyStyledComponent} />
                <Route path="/clock" component={Clock} />
                <Route path={'/clock/counter'} component={Counter} />
                </div>
            </Router>
            );
        }
        
}
