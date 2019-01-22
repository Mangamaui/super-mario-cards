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
    };

    this.createCardList();
  }

  createCardList() {

    for(let i = 0; i < this.props.cardList.length; i++ ) {
      const card = this.props.cardList[i];

      const temp = <Card key={"k"+ i} id={card.id} cardHandler={this.cardHandler}
        sign={card.sign} pos={card.pos} state={card.state} />

      this.state.cardList.push(temp);
    }

  }

  cardHandler(e) {
    e.preventDefault();

    const currentSelectedCard = e.currentTarget.id;
    const previousSelectedCard = this.props.previousSelectedCard;
    console.log(currentSelectedCard, previousSelectedCard);

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
