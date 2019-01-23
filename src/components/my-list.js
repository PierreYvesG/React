import React from 'react'

class MyList extends React.Component {

    render() {
        return (
            <ul>
                { this.props.children }
            </ul>
        )
    }
}

export default MyList

// Exemple d'utilisation 

//<MyList>
  //  <li>Item 1</li>
  //  <li>Item 2</li>
//</MyList>    