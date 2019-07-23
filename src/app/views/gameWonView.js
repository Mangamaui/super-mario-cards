import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from '../actions';

import Modal from '../modal';

const GameWonView = (props) => {

  return (
    <Modal
      className="endState"
      title="You won!"
      buttonText="Rematch?"
      buttonHandler={props.actions.createGame}
      />
  )
}


function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actionCreators, dispatch) }
}

export default connect(null, mapDispatchToProps)(GameWonView);
