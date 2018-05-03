import React, { Component } from 'react';
import './sass/main.scss';

//////// ROUTER ////////
const ReactRouter = require('react-router-dom');
const Router = ReactRouter.BrowserRouter;
const Route = ReactRouter.Route;

// context
const Context = React.createContext('light');

// provider
class Provider extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      theme: 'light',
      name: 'Troy',
      age: 30
    };

    this.toggleTheme = this.toggleTheme.bind(this);
  }

  toggleTheme() {
    this.setState(({theme}) => ({
      theme: theme === 'light' ? 'dark' : 'light'
    }));
  }

  render() {
    return(
      <Context.Provider value={{state: this.state}}>
        <button onClick={this.toggleTheme} >Toggle Theme</button>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default class App extends Component {
  render() {
    return (
      <Router>
        <Provider>
          <Context.Consumer>
            {val => (
              <React.Fragment>
                <h1>Hello {val.state.name}</h1>
                <h1>Age: {val.state.age}</h1>
                <h1>Theme: {val.state.theme}</h1>
              </React.Fragment>
            )}
          </Context.Consumer>
        </Provider>
      </Router>
    )
  }
}
