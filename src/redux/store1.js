import { createStore } from 'redux';



function counter(state = 10, action) {
  switch (action.type) {
  case 'INCREMENT':
    return state + 1
  case 'DECREMENT':
    return state - 1
  default:
    return state
  }
}

// Création du store qui récupère notre 'état'

let store = createStore(counter)

// Création du subscriber pour modifier "l'état" 
store.subscribe(() =>
  console.log(store.getState())
)

// Le seul moyen de modifier l'état de l'application est de dispatcher des actions.

store.dispatch({ type: 'INCREMENT' })

store.dispatch({ type: 'INCREMENT' }) // +2

store.dispatch({ type: 'DECREMENT' })

store.dispatch({ type: 'DECREMENT' }) //-2 

store.dispatch({ type: 'INCREMENT' }) // +1

store.dispatch({ type: 'DECREMENT' })

store.dispatch({ type: 'DECREMENT' }) // -2 on arrive à un counter de 9 avec "state = 10" exemple 