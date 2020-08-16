// Setup data layer 
// Track the basket 

import React,{ createContext, useContext, useReducer } from "react";

// creating Data layer 
export const StateContext = createContext();

// building a provider
export const StateProvider = ({reducer, intialState, children}) => (
    <StateContext.Provider value = {useReducer(reducer, intialState)}>
        {children}
    </StateContext.Provider>
);


//this is how we use it inside of a component 
export const useStateValue = () => useContext(StateContext)

