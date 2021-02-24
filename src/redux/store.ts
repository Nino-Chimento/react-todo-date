import { combineReducers, createStore, applyMiddleware } from "redux";
import { reducerCart } from "./reducers/reducerCart";
import { middlewares } from "./middlewares";
import { middlewareSaga } from "./middlewares/middlewareSaga";
import { composeWithDevTools } from "redux-devtools-extension";
import { takeLatest } from "redux-saga/effects";
import {
  FETCH_POSTS_LIST_REQUEST,
  FETCH_COMMENTS_LIST_REQUEST,
} from "./actions";
import { sagaPostList } from "./sagas";
import { sagaCommentList } from "./sagas/sagaCommentList";

const initialState = {
  cart: {
    card: [],
    likeCard: [],
  },
};

const rootReducer = combineReducers({
  cart: reducerCart,
});

function* rootSaga() {
  yield takeLatest(FETCH_POSTS_LIST_REQUEST, sagaPostList);
  yield takeLatest(FETCH_COMMENTS_LIST_REQUEST, sagaCommentList);
}

export const configureStore = () => {
  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares))
  );

  middlewareSaga.run(rootSaga);

  return store;
};
