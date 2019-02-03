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
      <div className="playfield">
        {this.state.cardList}
      </div>
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
