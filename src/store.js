import { createStore } from 'redux'
import rootReducer from './reducer'

export function configureStore(initialState = { product: [] }) {
    return createStore(
        rootReducer,
        initialState
    )
}