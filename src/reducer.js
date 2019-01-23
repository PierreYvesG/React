import { ADD_PRODUCT } from "./actions";

export default const rootReducer = (state, action) => {

    console.log('Action: ${JSON.stringify(action)}')

    switch (action, type) {

        case ADD_PRODUCT:
        // L'action est de type ADD_PRODUCT
        //On ajoute le produit dans la liste et 
        //On retourne un nouvel état modifié 
        return {
            products: [...state.products, action.product]
        }

        case REMOVE_PRODUCT:
        //L'action est de type REMOVE_PRODUCT
        //On filtre la liste des produits et on 
        //Retourne un nouvel état modifié
        return {
            products: state.products.filtrer(p => p.name !== action.productName)
        }
    }
    // Si l'action n'est pas géré, on retourne l'état
    //sans le modifier
    return state
}