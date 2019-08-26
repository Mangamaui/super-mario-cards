import React from 'react';
import { CARD_STATES, CARD_SIGNS } from './constants';
import styled from 'styled-components';

import { BLACK } from './styling/colors';

class Card extends React.Component {

  shouldComponentUpdate(nextProps) {
    if(JSON.stringify(nextProps) === JSON.stringify(this.props)) {
      return false
    } else {
      return true;
    }
  }

  setCard() {
    let card;

    switch(this.props.state) {

      case CARD_STATES.HIDDEN:
        card = (
          <StyledCard className={`card`} id={this.props.id} onClick={this.props.cardHandler}>
            <div className="card__side card__side--front">
              <img src={CARD_SIGNS.spades} alt="spades-decoration" />
            </div>
            <div className="card__side card__side--back">
              <img src={CARD_SIGNS[this.props.sign]} alt={this.props.sign} />
            </div>
          </StyledCard>
        );
        break;

      case CARD_STATES.VISIBLE:
        card = (
          <StyledCard className={`card card--visible`} id={this.props.id} onClick={this.props.cardHandler}>
            <div className="card__side card__side--front">
              <img src={CARD_SIGNS.spades} alt="spades-decoration" />
            </div>
            <div className="card__side card__side--back">
            <img src={CARD_SIGNS[this.props.sign]} alt={this.props.sign} />
            </div>
          </StyledCard>
        );
        break;

      case CARD_STATES.INACTIVE:
        card = (
          <StyledCard className={`card card--inactive`} id={this.props.id}>
            <div className="card__side card__side--front">
              <img src={CARD_SIGNS.spades} alt="spades-decoration" />
            </div>
            <div className="card__side card__side--back">
              <img src={CARD_SIGNS[this.props.sign]} alt={this.props.sign} />
            </div>
          </StyledCard>
        );
        break;

        default:
          card = (
            <StyledCard className={`card`} id={this.props.id} onClick={this.props.cardHandler}>
              <div className="card__side card__side--front">
                <img src={CARD_SIGNS.spades} alt="spades-decoration" />
              </div>
              <div className="card__side card__side--back">
                <img src={CARD_SIGNS[this.props.sign]} alt={this.props.sign} />
              </div>
            </StyledCard>
          );
    }
    return card;
  }

  render() {
    const card = this.setCard();
    console.log(this.props);

    return (
      <React.Fragment>
        {card}
      </React.Fragment>
    )
  }
}

const StyledCard = styled.div`
  position: relative;
  display: block;
  font-size: 18px;
  margin: 5px;
  width: 106px;
  height: 154px;
  text-align: center;
  position: relative;

  .card__side {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border: 3px solid ${BLACK};
    border-radius: 10px;

    &:not(.card--inactive) {
      transition: all .6s ease;

      &--back {
        transform: rotateY(180deg);
      }
    }

    &--front {
      background-color: white;
    }

    &--back {
      background-color: white;
      transform: rotateY(180deg);
    }

  }

  &.card--visible .card__side--front {
    transform: rotateY(-180deg);
  }

  &.card--visible .card__side--back {
    transform: rotate(0);
  }

  &.card--inactive .card__side {
    &--front {
      transform: rotateY(-180deg);
    }

    &--back {
      transform: rotate(0);
    }

  }


  img {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }
`;


export default Card;
