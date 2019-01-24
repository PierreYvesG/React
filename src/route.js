import React from 'react'; 
import { BrowserRouter as Router } from 'react-router-dom'; // HashRouter ou BrowserRouter pour les url sans # système ancre
import { Switch, Route } from 'react-router';
import ProductPage from './components/product';


export default class Routee extends React.Component {

    render() {
        return(
        <Router>
            <Switch>
                
                
                <Route path='/products/:productId' component={ProductPage} />

            </Switch>
        </Router>)
    }
}