export const ADD_PRODUCT = 'ADD_PRODUCT'

export function addProduct (name, price) {
    return {type: ADD_PRODUCT, product: { name, price}}
}

export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'

export function removeProduct (name) {
    return {type: REMOVE_PRODUCT, productName: Name}
}
    
