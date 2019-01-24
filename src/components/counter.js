import React from 'react';

export default class Counter extends React.Component {
    constructor(props) {
        super(props)
        //Initialisation du 'state' du composant
        this.state = {
            count : 0
            
        }
        //on "lie" les méthodes de la classe instance
        this.increment = this.increment.bind(this) 
        this.decrement = this.decrement.bind(this)
    }
        //Méthode du rendu du composant (&nbsp=espace)
        render() {
            return (
                <div>
                    Count: <span>{ this.state.count }</span>&nbsp; 
                    <button disabled={ this.state.count>=this.props.max } onClick= { this.increment }>+1</button>
                    <button onClick= { this.decrement }>-1</button>
                </div>
            )
        }

        //La méthode increment() incrémente la valuer du compteur de +1
        increment() {
            if(this.state.count<this.props.max){
            this.setState(prevState => ({ count: prevState.count+1 }))
            }
        }

         //La méthode decrement() décrémente la valuer du compteur de -1
         decrement() {
            this.setState(prevState => ({ count: prevState.count-1 }))
        }

}