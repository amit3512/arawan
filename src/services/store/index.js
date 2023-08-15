import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";

import todoReducer from "../redux/todo/reducer";

export default function configureStore() {
  const mainReducer = combineReducers({
    todoReducer: todoReducer,
  });
  const store = createStore(mainReducer, applyMiddleware(thunk));
  return { store };
}
