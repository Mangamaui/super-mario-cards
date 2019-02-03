import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './App.css';
import * as actionCreators from './app/actions';

// import Playfield from './app/playfield';
import StartView from './app/views/startView';
import GameView from './app/views/gameView';
import GameOverView from './app/views/gameOverView';
import GameWonView from './app/views/gameWonView';

import { GAME_STATES } from './app/constants';

const App = (props) => {

  const switchView = (view) => {

      switch(view) {
        case GAME_STATES.START:
          return (<StartView />)

        case GAME_STATES.IN_PROGRESS:
          return (<GameView />)

        case GAME_STATES.GAME_OVER:
          return (<GameOverView />)

        case GAME_STATES.GAME_WON:
          return (<GameWonView />)

        default:
          return (<div>404</div>);
      }
  }

  const view = switchView(props.view);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Silly Cardgame</h1>
      </header>
      <main className="main">
        <div className="view">
          {view}
        </div>
      </main>
    </div>
  );

}

function mapStateToProps(state) {
  return {
    view: state.gameState
  }
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actionCreators, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
