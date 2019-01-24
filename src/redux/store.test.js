/* globals tests, expect , jest */
import { addProduct, removeProduct } from './actions'
import  {configureStore} from './store'

test('Ajout/suppression des produits', () => {
    //on crée une instance dans notre store 
    //avec le state par défaut
    const store = configureStore()

    //On crée un "faux" subscriber
    // pour vérifier que l'état du store
    // a bien été modifié le nombre de fois voulu 
    const subscriber = jest.fn()

    //On attache notre faux subscriber
    //au store
    store.subscibe(subscriber)

    //On "dispatch" nos actions
    store.dispatch(addProduct('pomme', 5))
    store.dipatch(addProduct('orange', 7))
    store.dispatch(removeProduct('pomme'))

    //On s'assure que notre subscriber a bien été appelé
    expect(subscriber).toHaveBeenCalledTimes(3)
    
    const state = store.getState()

    //on s'assure que l'état du store correspond à ce qu'on attend
    expect(state).toMatchObject({
        products: [
            {name: 'orange', price: 7}
        ]
    })
})