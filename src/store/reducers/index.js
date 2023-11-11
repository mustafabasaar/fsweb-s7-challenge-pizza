import { pizzaFormReducer } from "./pizzaFormReducer";
import { combineReducers } from "redux";

export const reducers = combineReducers({
  pizzaForm: pizzaFormReducer,
});
