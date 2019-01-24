import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './reducer';
import thunk from 'redux-thunk';


export function configureStore(initialState = { product: [] }) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk) // On ajoute le middleware 'thunk'
    )
}