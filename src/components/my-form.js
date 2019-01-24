import React from 'react';

export default class Myform extends React.Component {

    constructor(props) {
        super(props);
        this.state = {name: ''};
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleChange(evt) {
        this.setState({value: evt.target.value});
    }

    handleSubmit(evt) {
        console.log('Votre nom est ${this.state.name}');
        evt.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Nom:
                        <input type="text" value={this.state.name} onChange={this.handleChange} />
                </label>
                        <input type="submit" value="soumettre" />
            </form>
        );
    }
}