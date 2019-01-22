import React from 'react';
import { CARD_STATES } from './../constants';

const Card = (props) => {
  console.log(props.state);
  return (
    <div className="card" id={props.id} onClick={props.cardHandler}>

        {props.state === CARD_STATES.VISIBLE &&
        props.sign}
    </div>
  )
}

export default Card;
