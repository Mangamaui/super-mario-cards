import React from 'react';
import { CARD_STATES } from './../constants';

const Card = (props) => {
  let card;

  if(props.state === CARD_STATES.INACTIVE) {
    card = (
      <div className="card" id={props.id}>
        {props.sign}
      </div>
    )
  } else {
    card = (
      <div className="card" id={props.id} onClick={props.cardHandler}>
        {props.state === CARD_STATES.VISIBLE &&
        props.sign}
      </div>
    )
  }

  return (
    <React.Fragment>
      {card}
    </React.Fragment>
  )
}

export default Card;
