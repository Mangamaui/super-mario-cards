import {
  CREATE_GAME,
  CREATE_CARDLIST,
  TOGGLE_CARD,
  UPDATE_CARDS,
  UPDATE_SELECTED_CARDS,
  CLEAR_SELECTED_CARDS
  } from './actionTypes';

export function createGame() {
  return {
    type: CREATE_GAME
  }
}

export function createCardList() {
  return {
    type: CREATE_CARDLIST,
  }
}

export function toggleCard(id) {
  return {
    type: TOGGLE_CARD,
    payload: id
  }
}

export function updateCards(id) {
  return {
    type: UPDATE_CARDS,
    payload: id
  }
}

export function updateSelectedCards(id) {
  return (dispatch, getState) => {
    dispatch({
      type: TOGGLE_CARD,
      payload: id
    });

    dispatch({
      type: UPDATE_SELECTED_CARDS,
      payload: id
    });

    setTimeout(() => {
      if(getState().selectedCards.length === 2) {
        const cards = getData(getState());
        const result = compareCards(cards[0], cards[1]);

        if(result) {

          dispatch({
            type: UPDATE_CARDS
          });

        } else {
          dispatch({
            type: TOGGLE_CARD,
            payload: cards[0].id
          });

          dispatch({
            type: TOGGLE_CARD,
            payload: cards[1].id
          });
        }

        dispatch({
          type:   CLEAR_SELECTED_CARDS
        })
      }
    }, 2000)

  }
}

export function clearSelectedCards() {
  return {
    type: CLEAR_SELECTED_CARDS
  }
}

/**
*   Helper functions
*/

function getData(state) {
  const id1 = state.selectedCards[0];
  const id2 = state.selectedCards[1];
  const cardList = state.cardList

  const card1 = getCard(cardList, id1);
  const card2 = getCard(cardList, id2);

  return [card1, card2];
}

function compareCards(card1, card2) {

  return card1.sign === card2.sign ? true : false;
}

function getCard(list, id) {
  return list.find((card) => {
    return card.id === id;
  });
}
