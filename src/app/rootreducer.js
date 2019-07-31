import {
  CREATE_GAME,
  SET_GAME_DIFFICULTY,
  UPDATE_GAME_STATE,
  UPDATE_PREVIOUS_GAME_STATE,
  UPDATE_ATTEMPTS,
  CREATE_CARDLIST,
  FLIP_CARDS,
  UPDATE_CARDS,
  ADD_SELECTED_CARD,
  CLEAR_SELECTED_CARDS,
  TOGGLE_SOUND
  } from './actionTypes';

import {
  CARD_TYPES,
  CARD_STATES,
  GAME_STATES,
  GAME_DIFFICULTY
  } from './constants';

const initialState = {
  gameDifficulty: GAME_DIFFICULTY.EASY,
  gameState: GAME_STATES.START,
  previousGameState: null,
  attempts: 0,
  selectedCards: [],
  cardList: [],
  soundMuted: true
}

const rootReducer = (state = initialState, action) => {

  switch (action.type) {

    /**
    *   Create Game
    */
    case CREATE_GAME:
      console.log("create game");
      const newList = generateCardList();
      return {...initialState,
        cardList: newList,
        soundMuted: state.soundMuted
      };

    case SET_GAME_DIFFICULTY:
      console.log("set game difficulty");
      const difficulty = action.payload;
      return {...state, gameDifficulty: difficulty};

    case TOGGLE_SOUND:
      console.log("toggle sound state");
      const soundState = state.soundMuted ? false : true;
      return {...state, soundMuted: soundState};

    case UPDATE_PREVIOUS_GAME_STATE:
      console.log("update game state");
      return {...state, previousGameState: action.payload};

    case UPDATE_GAME_STATE:
      console.log("update game state");
      return {...state, gameState: action.payload};

    case UPDATE_ATTEMPTS:
      console.log("update attempts");
      const attempts = state.attempts + 1;
      return {...state, attempts: attempts};

    case CREATE_CARDLIST:
      console.log("create cardlist");
      const cardList = generateCardList();
      return {...state, cardList: cardList};

    case FLIP_CARDS:
      console.log("flip cards");
      const flippedCards =  state.cardList.map(card => {
        return (card.id === state.selectedCards[0]
            || card.id === state.selectedCards[1])
          ? { ...card, state: CARD_STATES.HIDDEN }
          : card
      });

      return {...state, cardList: flippedCards};

    case UPDATE_CARDS:
      console.log("update cards");
      const newCardList = state.cardList.map(card => {
        return (card.id === state.selectedCards[0]
            || card.id === state.selectedCards[1])
          ? { ...card, state: CARD_STATES.INACTIVE }
          : card
      });

      return {...state, cardList: newCardList};

    case ADD_SELECTED_CARD:
      console.log("add a selected card");

      // add the id of the selected card to the selectedCardsList
      const newSelectedCardList = [...state.selectedCards]
      newSelectedCardList.push(action.payload);

      // update the state of the card that was selected
      const tempCardList1 = state.cardList.map(card => {
        return (card.id === action.payload) ?
          { ...card, state: CARD_STATES.VISIBLE }
          : card
        });

      return {...state
        ,selectedCards: newSelectedCardList
        ,cardList: tempCardList1

      };

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
  const cardSigns = JSON.parse(JSON.stringify(CARD_TYPES));
  const cardLimit = 18;
  let signLimit = 6;
  let cardLimit2 = Array.from(Array(18).keys());

  const list = [];

  for(let i = 0; i < cardLimit; i++ ) {
    let n = getRandom(signLimit);
    let s = getRandom(cardLimit2.length);

    let sign = cardSigns[n][0];
    const card = {
      key: `k${i}`,
      id: `id${i}`,
      sign: sign,
      pos: i,
      state: CARD_STATES.HIDDEN
    }

    list[cardLimit2[s]] = card;

    cardLimit2.splice(s,1);

    cardSigns[n][1] -=1;

    if(cardSigns[n][1] === 0) {
      cardSigns.splice(n, 1);
      signLimit -=1;
    }

  }

  return list;
}
