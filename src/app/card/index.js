import React from 'react';

const Card = (props) => {

  return (
    <div className="card" id={props.id} onClick={props.cardHandler}>
      {props.sign}
    </div>
  )
}

export default Card;
