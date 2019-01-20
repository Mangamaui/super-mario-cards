export function createGame() {
  return {
    type: 'CREATE_GAME'
  }
}

export function addCard(card) {
  return {
    type: 'ADD_CARD',
    payload: card
  }
}

export function updateCard(id) {
  return {
    type: 'UPDATE_CARD',
    payload: id
  }
}

export function updateSelectedCard(id) {
  return {
    type: 'UPDATE_SELECTED_CARD',
    payload: id
  }
}

export function clearSelectedCard() {
  return {
    type: 'CLEAR_SELECTED_CARD'
  }
}
