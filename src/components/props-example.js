import React from 'react';

class PropsExample extends React.Component {

    render() {
        return (
            <span>{ this.props.text }</span>
        )
    }
}

export default PropsExample

//exemple d'utilisation 

//<PropsExample text="foo bar"