import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import houseReducer from "./reducers/houseReducer";

const rootReducer = combineReducers({
  house: houseReducer,
});

const middlewareToApply = [thunk];

const middleware = composeWithDevTools(applyMiddleware(...middlewareToApply));

export default createStore(rootReducer, middleware);
