const initialState = {
  view: "start",
  playerMode: null,
  previousSelectedCard: null,
  cardList: []
}

const rootReducer = (state = initialState, action) => {
  let cardList;

  switch (action.type) {

    /**
    *   Create Game
    */
    case 'CREATE_GAME':
      console.log("create game");
      return {...initialState};

    case 'ADD_CARD':
      console.log("add card");
      cardList = [...state.cardList, action.payload];
      return {...state, cardList: cardList};

    case 'UPDATE_CARD':
      console.log("update card");
      cardList = [...state.cardList];
      const index = cardList.findIndex(card => card.id === action.payload);
      cardList[index].state = 1 ;

      return {...state};

    case 'UPDATE_SELECTED_CARD':
      console.log("update previous selected cards");
      return {...state, previousSelectedCard: action.payload};

    case 'CLEAR_SELECTED_CARD':
      console.log("cleared previous selected card");
      return {... state, previousSelectedCard: null};

    default:
       return state;
  }

};

export default rootReducer;
