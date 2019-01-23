import React from 'react'
import style from './my-styled-component.style.js'

export default class MyStyledComponent extends React.Component {


   // render() {
    //    return (
      //      <div style={style.self}>
        //        <div style={style.content}>
          //          Isnt it pretty ?
            //    </div>
            //</div>        
       // )
   // }

   
    render() {
        return (
            <div style={{...style.self,...this.props.style}}>
                <div style={{...style.content,...this.props.contentStyle}}>
                    Isnt it pretty ?
                </div>
            </div>        
        )
    }
}

//Exemple d'utilisation

<MyStyledComponent style={{backgroundColor: 'green'}} contentStyle={{border: 'none'}} />