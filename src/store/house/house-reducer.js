import * as types from "./house-actions";

const initialState = {
  text: "super hero"
}

export const houseReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_TEXT :
      return {...state, text: action.payload}

    default:
      return state;
  }
}
