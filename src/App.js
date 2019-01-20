import React, { Component } from 'react';

import './App.css';


class App extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.state = {view: this.switchView("start")};

  }

  switchView (view) {
      switch(view) {
        case "start":
          return (
            <div className="view">
              <h2>Welcome to Silly Cardgame!</h2>
              <button onClick={this.handleClick}>Start Game</button>
            </div>
          )

        default:
          return (<div>404</div>);
      }
  }

  handleClick(e) {
    e.preventDefault();
    const view = this.switchView("game");

    this.setState({
      view: view
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Silly Cardgame</h1>
        </header>
        <main className="main">
          {this.state.view}
        </main>
      </div>
    );
  }
}

export default App;
