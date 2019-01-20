import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Card from './card/index';
import * as actionCreators from './actions';

class Playfield extends React.Component {
  constructor(props) {
    super(props);

    this.cardHandler = this.cardHandler.bind(this);

    this.state = {
      cardList: [],
      selectedCards: []
    };
    this.setup();
  }

  getRandom(max) {
     return Math.floor(Math.random() * Math.floor(max));
  }


  setup() {
    const cardLimit = 18;
    let signLimit = 6;

    const cardTypes = [
      ["flower",  4],
      ["mushroom", 4],
      ["star", 4],
      ["life", 2],
      ["coin10", 2],
      ["coin20", 2]
    ];

    for(let i = 0; i < cardLimit; i++ ) {
      let n = this.getRandom(signLimit);

      let sign = cardTypes[n][0];
      const card = {
        id: `id${i}`,
        sign: sign,
        pos: i,
        state: 0
      }

      const temp = <Card key={"k"+ i} id={card.id} cardHandler={this.cardHandler}
        sign={card.sign} pos={card.pos} state={card.state} />

      this.state.cardList.push(temp);
      this.props.actions.addCard(card);

      cardTypes[n][1] -=1;

      if(cardTypes[n][1] === 0) {
        cardTypes.splice(n, 1);
        signLimit -=1;
      }

    }

  }

  cardHandler(e) {
    e.preventDefault();

    const currentSelectedCard = e.currentTarget.id;
    const previousSelectedCard = this.props.previousSelectedCard;
    console.log(previousSelectedCard);

    if(!previousSelectedCard) {
      this.props.actions.updateSelectedCard(currentSelectedCard);
    } else {
      if(previousSelectedCard !== currentSelectedCard) {
        this.compareCards(previousSelectedCard, currentSelectedCard);
      }
    }
  }

  compareCards(id1, id2) {
    const card1 = this.getCardData(id1);
    const card2 = this.getCardData(id2);

    if(card1.sign === card2.sign) {
      this.props.actions.updateCard(id1);
      this.props.actions.updateCard(id2);
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
    return (
      <div className="playfield">
        {this.state.cardList}
      </div>
    )
  }


}

function mapStateToProps(state) {
  return {
    cardList: state.cardList,
    previousSelectedCard: state.previousSelectedCard
  }
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actionCreators, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Playfield);
