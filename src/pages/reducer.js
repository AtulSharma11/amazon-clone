import React from "react";
export const initialState = {
  basket: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_BASKET":
      // Logic for adding the item to the basket
      break;
    case "REMOVE_FROM_BASKET":
      // Logic for removing the item to the basket
      break;
    default:
      return state;
  }
}

export default reducer;
