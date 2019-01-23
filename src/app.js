import React from 'react' 
import { HashRouter } from 'react-router-dom'
import { Route, Switch, Redirect } from 'react-router'
import { Clock, MyStyledComponent, My404Page } from './components'

export default class App extends React.Component {

    render() {
        <HashRouter>
            <Switch>

                <Route path='/clock' exact component={Clock} />
                <Route path='/styled' exact component={MyStyledComponent} />

                <Redirect from='/oldstyle' to='styled' />

                <Route component={My404Page} />
                
            </Switch>
        </HashRouter>
    }
}