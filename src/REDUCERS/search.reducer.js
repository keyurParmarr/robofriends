import { constant } from "./constant";

const initialState = "";
export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case constant.SEARCHROBO:
      return action.payload;
    default:
      return state;
  }
};
