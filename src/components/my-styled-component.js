import React from 'react';
import styles from './my-styled-component.styles.js';

export default class MyStyledComponent extends React.Component {


   /* render() {
        return (
            <div style={styles.self}>
                <div style={styles.content}>
                    Isnt it pretty ?
                </div>
            </div>        
     )
   }*/

   
    render() {
        return (
            <div style={{...styles.self,...this.props.styles}}>
                <div style={{...styles.content,...this.props.contentStyle}}>
                    Isnt it pretty ?
                </div>
            </div>        
        )
    }
}

//Exemple d'utilisation

//<MyStyledComponent style={{backgroundColor: 'green'}} contentStyle={{border: 'none'}} />