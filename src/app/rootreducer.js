import {
  CREATE_GAME,
  CREATE_CARDLIST,
  TOGGLE_CARD,
  UPDATE_CARDS,
  UPDATE_SELECTED_CARDS,
  CLEAR_SELECTED_CARDS
  } from './actionTypes';
import { CARD_TYPES, CARD_STATES } from './constants';

const initialState = {
  view: "start",
  gameState: "",
  playerMode: null,
  selectedCards: [],
  cardList: generateCardList()
}

const rootReducer = (state = initialState, action) => {

  switch (action.type) {

    /**
    *   Create Game
    */
    case CREATE_GAME:
      console.log("create game");
      return {...initialState};

    case CREATE_CARDLIST:
      console.log("create cardlist");
      const cardList = generateCardList();
      return {...state, cardList: cardList};

    case TOGGLE_CARD:
    console.log("toggle card");
      const tempCardList = state.cardList.map(card => {
      return (card.id === action.payload)
        ? (card.state === CARD_STATES.HIDDEN
          ? { ...card, state: CARD_STATES.VISIBLE }
            : {...card, state: CARD_STATES.HIDDEN })
          : card
      });


      return {...state, cardList: tempCardList};

    case UPDATE_CARDS:
      console.log("update cards");
      const newCardList = state.cardList.map(card => {
        return (card.id === state.selectedCards[0]
            || card.id === state.selectedCards[1])
          ? { ...card, state: CARD_STATES.INACTIVE }
          : card
      });
      console.table(newCardList);

      return {...state, cardList: newCardList};

    case UPDATE_SELECTED_CARDS:
      console.log("update selected cards");
      const newSelectedCardList = [...state.selectedCards]
      newSelectedCardList.push(action.payload);
      return {...state, selectedCards: newSelectedCardList};

    case CLEAR_SELECTED_CARDS:
      console.log("cleared selected cards");
      const emptyArray = []
      return {...state, selectedCards: emptyArray};

    default:
       return state;
  }

};

export default rootReducer;


/**
*   Helper functions
*/

function getRandom(max) {
   return Math.floor(Math.random() * Math.floor(max));
}

function generateCardList() {
  const cardLimit = 18;
  let signLimit = 6;
  const list = [];



  for(let i = 0; i < cardLimit; i++ ) {
    let n = getRandom(signLimit);

    let sign = CARD_TYPES[n][0];
    const card = {
      key: `k${i}`,
      id: `id${i}`,
      sign: sign,
      pos: i,
      state: CARD_STATES.HIDDEN
    }

    list.push(card);

    CARD_TYPES[n][1] -=1;

    if(CARD_TYPES[n][1] === 0) {
      CARD_TYPES.splice(n, 1);
      signLimit -=1;
    }

  }

  return list;
}
