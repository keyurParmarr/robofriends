import { combineReducers } from "redux";
import { roboReducer } from "./robo.reducer";
import { searchReducer } from "./search.reducer";

export const rootReducer = combineReducers({
  robo: roboReducer,
  search: searchReducer,
});
