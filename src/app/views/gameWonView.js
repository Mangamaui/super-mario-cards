import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from '../actions';

import Modal from '../modal';
import Audio from '../audio';

import { MUSIC } from '../constants';

const GameWonView = (props) => {

  return (
    <React.Fragment>
      <Modal
        className="endState"
        title="You won!"
        buttonText="Rematch?"
        buttonHandler={props.actions.createGame}
        />
      <Audio sound={MUSIC.GAME_WON} />
    </React.Fragment>
  )
}


function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actionCreators, dispatch) }
}

export default connect(null, mapDispatchToProps)(GameWonView);
