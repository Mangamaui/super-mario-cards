import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import styled from 'styled-components';

import Card from './card';
import * as actionCreators from './actions';


import { BEIGE, ORANGE } from './styling/colors';


class Playfield extends React.Component {
  constructor(props) {
    super(props);

    this.cardHandler = this.cardHandler.bind(this);

    this.state = {
      cardList: [],
    };
  }

  createCardList() {
    this.state.cardList.splice(0);

    for(let i = 0; i < this.props.cardList.length; i++ ) {
      const card = this.props.cardList[i];
      const s = Math.floor(Date.now() / 1000);

      const temp = <Card key={"kc"+ i +s} id={card.id} cardHandler={this.cardHandler}
        sign={card.sign} pos={card.pos} state={card.state} />

      this.state.cardList.push(temp);
    }

  }

  cardHandler(e) {
    e.preventDefault();

    const currentSelectedCard = e.currentTarget.id;

    if(this.props.selectedCards.length < 1) {
      this.props.actions.updateSelectedCards(currentSelectedCard);
    } else if(this.props.selectedCards.length === 1) {
      if(this.props.selectedCards[0] !== currentSelectedCard) {
        this.props.actions.updateSelectedCards(currentSelectedCard);
      }
    }
  }


  /**
  *   getPlayerData returns the player object based on a matching ID
  */
  getCardData(id) {
      return this.props.cardList.find((card) => {
          return card.id === id;
      })
  }

  render() {
    this.createCardList();

    return (
      <StyledPlayfield className="playfield">
        {this.state.cardList}
      </StyledPlayfield>
    )
  }

}

function mapStateToProps(state) {
  return {
    cardList: state.cardList,
    selectedCards: state.selectedCards
  }
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actionCreators, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Playfield);


const StyledPlayfield = styled.div`
  background-color: ${ORANGE.normal}
  border: 10px solid ${ORANGE.border};
  border-radius: 30px;
  color: ${BEIGE};
  display: flex;
  flex-wrap: wrap;
  position: relative;
  width: 700px;
  padding: 30px 30px;
  box-shadow: inset 0px -9px 0px 0px ${ORANGE.shadow};
  left: 50%;
  transform: translateX(-50%);
  top: 10px;

  &:before {
    border-radius: 20px 20px 0 0;
    box-shadow: inset 0px 10px 0px 0px ${ORANGE.light};
    content: "";
    display: block;
    width: 100%;
    height: 50px;
    position: absolute;
    top: 0;
    left: 0;
  }
  `
