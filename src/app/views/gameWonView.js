import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from '../actions';

const GameWonView = (props) => {

  return (
    <React.Fragment>
      <h2>You won!</h2>
      <p>:)</p>
      <button className="" onClick={props.actions.createGame}>Rematch?</button>
    </React.Fragment>
  )
}


function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actionCreators, dispatch) }
}

export default connect(null, mapDispatchToProps)(GameWonView);
