import {
  CREATE_GAME,
  CREATE_CARDLIST,
  TOGGLE_CARD,
  UPDATE_CARD,
  UPDATE_SELECTED_CARD,
  CLEAR_SELECTED_CARD
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

export function updateCard(id) {
  return {
    type: UPDATE_CARD,
    payload: id
  }
}

export function updateSelectedCard(id) {
  return {
    type: UPDATE_SELECTED_CARD,
    payload: id
  }
}

export function clearSelectedCard() {
  return {
    type: CLEAR_SELECTED_CARD
  }
}
