import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import styled from 'styled-components';

import Background from './app/styling/background';
import Counter from './app/counter';
import { Button } from './app/styling/button';

import * as actionCreators from './app/actions';

import StartView from './app/views/startView';
import GameView from './app/views/gameView';
import GameOverView from './app/views/gameOverView';
import GameWonView from './app/views/gameWonView';
import HelpView from './app/views/helpView';

import {ReactComponent as Logo} from './assets/super-mario-cards-logo.svg';

import { GAME_STATES } from './app/constants';
import { BLACK, ORANGE } from './app/styling/colors';

const App = (props) => {

  const helpHandler = (e) => {
    e.preventDefault();
    props.actions.updatePreviousGameState(props.view);
    props.actions.updateGameState(GAME_STATES.HELP);
  }

  const closeHandler = (e) => {
    e.preventDefault();
    props.actions.updateGameState(props.previousView);
  }

  const switchView = (view) => {

      switch(view) {
        case GAME_STATES.HELP:
          return (<HelpView />)

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
      case GAME_STATES.HELP:
      return (
        <React.Fragment>
          <StyledLogo className="logo" />
          <Button className="close-btn button" onClick={closeHandler}>
            <i className="icon icon-close"></i>
          </Button>
        </React.Fragment>
      );

      case GAME_STATES.START:
      case GAME_STATES.GAME_OVER:
      case GAME_STATES.GAME_WON:
        return (
          <React.Fragment>
            <StyledLogo className="logo" />
            <Button className="help-btn button" onClick={helpHandler}>
              <i className="icon icon-help"></i>
            </Button>
          </React.Fragment>
        );

      case GAME_STATES.IN_PROGRESS:
        return (
          <React.Fragment>
            <Counter attempts={props.attempts} difficulty={props.difficulty} />
            <Button className="help-btn button" onClick={helpHandler}>
              <i className="icon icon-help"></i>
            </Button>
          </React.Fragment>
        );

      default:
        return ("");
    }
  }

  const view = switchView(props.view);
  const header = switchHeader(props.view);

  return (
    <div className="App">
      <Header className="App-header">
        {header}
      </Header>
      <Main className="main">
        <Background />
        {view}
      </Main>
    </div>
  );

}

function mapStateToProps(state) {
  return {
    view: state.gameState,
    previousView: state.previousGameState,
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
  background-color: transparent;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  height: ${HeaderHeight};
  padding: 10px 20px;
  position: relative;
  z-index: 10;

  .button {
    color: ${BLACK};
    transition: color 200ms;
    z-index: 11;

    &:hover {
      color: ${ORANGE.normal};
    }
  }
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
