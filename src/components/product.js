import React from 'react'
import { Route, Switch } from 'react-router'
import ProductView from './product-view'
import ProductEdit from './product-edit'

export default class ProductPage extends React.Component {
    render() {
        const { match } = this.props
        return (
            <Switch>
                <Route path={'${match.url}/view'} component={ProductView} />
                <Route path={'${match.url}/edit'} component={ProductEdit} />
            </Switch>
        )
    }
}