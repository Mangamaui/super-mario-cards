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


    default:
       return state;
  }

};

export default rootReducer;
