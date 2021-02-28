import { combineReducers, createStore, applyMiddleware } from "redux";

import { middlewares } from "./middlewares";
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {
  cart: {
    card: [],
    likeCard: [],
  },
};

const rootReducer = combineReducers({});

export const configureStore = () => {
  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares))
  );

  return store;
};
