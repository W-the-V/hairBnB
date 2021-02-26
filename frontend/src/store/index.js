import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import sessionReducer from "./session";
import modalReducer from "./Modals";
import menuReducer from "./showMenu";
import searchTabReducer from "./searchTab";
import pageReducer from "./pagestate";
import spotReducer from "./spots";

const rootReducer = combineReducers({
  session: sessionReducer,
  modal: modalReducer,
  menu: menuReducer,
  searchTab: searchTabReducer,
  page: pageReducer,
  spotState: spotReducer,
});

let enhancer;

if (process.env.NODE_ENV === "production") {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require("redux-logger").default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
