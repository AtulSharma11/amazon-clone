// Setup data layer (Nedded to track the basket, Keep track of the user information at the homepage).

import { createContext, useContext, useReducer } from "react";

// This is the data layer
export const StateContext = createContext();

// Build a provider
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// This is how we use it inside of the component
export const useStateValue = () => useContext(StateContext);
