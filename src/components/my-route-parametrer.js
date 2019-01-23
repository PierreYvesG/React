import React from 'react'
import { HashRouter } from 'react-router-dom'
import { Route } from 'react-router' 
import { MyRouteParametrer } from './components'


export default class App extends React.Component {
    render() {
        const { match } = this.props
        <span>Paramètre: { match.params.myParams }</span>
    }
}