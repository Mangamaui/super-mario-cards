import React from 'react';
import { CARD_STATES } from './constants';
import styled from 'styled-components';

import { BLACK } from './styling/colors';

const Card = (props) => {
  let card;

  switch(props.state) {

    case CARD_STATES.HIDDEN:
      card = (
        <StyledCard className={`card card--back ${props.className}`} id={props.id} onClick={props.cardHandler}>
          <img src={`${process.env.PUBLIC_URL}assets/super-mario-cards-spades.svg`} alt="spades-decoration" />
        </StyledCard>
      );
      break;

    case CARD_STATES.VISIBLE:
      card = (
        <StyledCard className={`card ${props.className}`} id={props.id} onClick={props.cardHandler}>
          <img src={`${process.env.PUBLIC_URL}assets/super-mario-cards-${props.sign}.svg`} alt={props.sign} />
        </StyledCard>
      );
      break;

    case CARD_STATES.INACTIVE:
      card = (
        <StyledCard className={`card ${props.className}`} id={props.id}>
          <img src={`${process.env.PUBLIC_URL}assets/super-mario-cards-${props.sign}.svg`} alt={props.sign} />
        </StyledCard>
      );
      break;

      default:
        card = (
          <StyledCard className={`card card--back ${props.className}`} id={props.id} onClick={props.cardHandler}>
            <img src={`${process.env.PUBLIC_URL}assets/super-mario-cards-spades.svg`} alt="spades-decoration" />
          </StyledCard>
        );
  }

  return (
    <React.Fragment>
      {card}
    </React.Fragment>
  )
}

const StyledCard = styled.div`
  background: white;
  position: relative;
  border: 3px solid ${BLACK};
  border-radius: 10px;
  display: block;
  font-size: 18px;
  margin: 5px;
  width: 100px;
  height: 148px;
  text-align: center;
  position: relative;

  &.card--back {
    padding: 0 20px 0 20px;
    box-sizing: border-box;
    width: 106px;
    height: 154px;
  }

  img {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }
`;


export default Card;
