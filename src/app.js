import React from 'react';
import { addProduct} from './redux/actions';
import { connect } from 'react-redux';

class Appp extends React.Component {

    componentDidMount() {
        // toute les 2 sec, on dispatch une nouvelle action dans le store 
        setInterval(()=> {
            this.props.dispatch(addProduct(`My product #${Date.now()}`, Math.random()*10|0))
        },2000)
    }

    render() {
        // On crée une liste à partir des éléments présent dans le  tableau des produits
        const items = this.props.products.map((p, i) => {
            return <li key={i}>{p.name}</li>
        })
        return (
            <ul>
                {items}
            </ul>
        ) 
    }
}

//Cette fonction permet de selectionner les éléments qui nous interesse dans le state 
// et de les exposer en tant que props sur notre composant 

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

// On emballe notre composant dans un H.O.C. (higher order component) 
// ce qui nous permet de récupérer les données sur le store 

export default connect(mapStateToProps)(Appp)