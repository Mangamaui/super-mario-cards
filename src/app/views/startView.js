import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actionCreators from '../actions';

import {
  GAME_DIFFICULTY,
  GAME_STATES
  } from '../constants';


class StartView extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      selectedOption: GAME_DIFFICULTY.EASY
    };

  }

  render() {

    return (
      <React.Fragment>
        <h2>Welcome to Silly Cardgame!</h2>
        <form>
          <fieldset>
            <label>
              <input type="radio" name="difficulty"
                value={GAME_DIFFICULTY.EASY}
                checked={this.state.selectedOption === GAME_DIFFICULTY.EASY}
                onChange={this.handleChange } />
                Easy
            </label>
            <label>
              <input type="radio" name="difficulty"
                value={GAME_DIFFICULTY.MEDIUM}
                checked={this.state.selectedOption === GAME_DIFFICULTY.MEDIUM}
                onChange={this.handleChange } />
              Medium
            </label>
            <label>
              <input type="radio" name="difficulty"
                value={GAME_DIFFICULTY.HARD}
                checked={this.state.selectedOption === GAME_DIFFICULTY.HARD}
                onChange={this.handleChange } />
              Hard
            </label>
          </fieldset>
          <input type="submit" onClick={this.handleClick} value="Start game" />
        </form>
      </React.Fragment>);
  }


  handleChange(e) {
    this.setState({
      selectedOption: e.target.value
    });
  }

  handleClick(e) {
    e.preventDefault();

    this.props.actions.setGameDifficulty(this.state.selectedOption);
    this.props.actions.updateGameState(GAME_STATES.IN_PROGRESS);
  }
}


function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actionCreators, dispatch) }
}

export default connect(null, mapDispatchToProps)(StartView);
