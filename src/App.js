import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './components/clock';
import Counter from './components/counter';
import PropsExample from './components/props-example';
import MyList from './components/my-list';
import MyForm from './components/my-form';
import MyStyledComponent from './components/my-styled-component';
import NewLink from './components/my-linked-component';
import counter from './redux/store1';
import { rootReducer } from './redux/reducer';
import Appp from './app.js';


class App extends Component {
  render() {
    return (

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Clock />
          <Counter max={5} />
          <Counter max={10} />
          <PropsExample text="Bonjour React" />
          <MyList>
            <li>Item 1</li>
            <li>Item 2</li>
          </MyList>
          <MyForm />
          <MyStyledComponent />
          <NewLink />
          <Appp />
          
          
         
        </header>
      </div>
    );
  }
}

export default App;



