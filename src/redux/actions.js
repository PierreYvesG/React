export const ADD_PRODUCT = 'ADD_PRODUCT'

export function addProduct (name, price) {
    return {type: ADD_PRODUCT, product: { name, price}}
}

export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'

export function removeProduct (name) {
    return {type: REMOVE_PRODUCT, productName: { name }}
}
    
export const SAVE_PRODUCT = 'SAVE_PRODUCT'
export const SAVE_PRODUCT_SUCCESS = 'SAVE_PRODUCT_SUCCESS'
export const SAVE_PRODUCT_FAILURE = 'SAVE_PRODUCT_FAILURE'

export function saveProduct (product) {
    return (dispatch, getState) => {
        dispatch({type: SAVE_PRODUCT, product})

        return fetch('http://my-app/products', {
            method: 'POST',
            body: JSON.stringify(product)
        })
        .then(res => res.json())
        .then(res => dispatch({ type:SAVE_PRODUCT_SUCCESS, product: res.data}))
        .catch(error => dispatch({ type:SAVE_PRODUCT_FAILURE, error}))
    }
}