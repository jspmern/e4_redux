import { combineReducers } from "redux";
import { countReducer } from "./counterReducer";
import todoReducer from "./todoReducer";

   
  export let rootReducer=combineReducers({count:countReducer,todo:todoReducer})