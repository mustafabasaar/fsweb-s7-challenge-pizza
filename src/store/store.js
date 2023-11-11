import { reducers } from "./reducers/index.js";
import { legacy_createStore as createStore } from "redux";

export const myStore = createStore(reducers);
