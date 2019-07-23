import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import styled from 'styled-components';

import Background from './app/styling/background';
import Counter from './app/counter';

import './App.scss';
import * as actionCreators from './app/actions';

import SplashView from './app/views/splashView';
import StartView from './app/views/startView';
import GameView from './app/views/gameView';
import GameOverView from './app/views/gameOverView';
import GameWonView from './app/views/gameWonView';

import {ReactComponent as Logo} from './assets/super-mario-cards-logo.svg';


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
          return (<div>404</div>)
      }
  }

  const switchHeader = (view) => {

    switch(view) {
      case GAME_STATES.START:
      case GAME_STATES.GAME_OVER:
      case GAME_STATES.GAME_WON:
        return (
          <StyledLogo className="logo" />
        );

      case GAME_STATES.IN_PROGRESS:
        return (
          <Counter attempts={props.attempts} difficulty={props.difficulty} />
        );

      default:
        return ("");
    }
  }

  const view = switchView(props.view);
  const header = switchHeader(props.view);

  const baseView = (
    <React.Fragment>
      <Header className="App-header">
        {header}
      </Header>
      <Main className="main">
        <Background />
        {view}
      </Main>
    </React.Fragment>
  );

  const splash = (
    <React.Fragment>
      <Background />
      <SplashView />
    </React.Fragment>
  )


  return (
    <div className="App">
      {baseView}
    </div>
  );

}

function mapStateToProps(state) {
  return {
    view: state.gameState,
    attempts: state.attempts,
    difficulty: state.gameDifficulty
  }
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actionCreators, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

const HeaderHeight = "70px";

const Header = styled.header`
  background-color: white;
  box-sizing: border-box;
  height: ${HeaderHeight};
  padding: 10px 20px;
  position: relative;
  z-index: 10;
`
const Main = styled.main`
  position: relative;
  width: 100vw;
  height: calc(100vh - ${HeaderHeight});
  z-index: 0;
  padding: 0 20px;
  box-sizing: border-box;
`
const StyledLogo = styled(Logo)`
  position: relative;
  height: 100%;
`
