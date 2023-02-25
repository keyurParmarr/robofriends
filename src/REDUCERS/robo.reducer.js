import { constant } from "./constant";

const initialState = [];
export const roboReducer = (state = initialState, action) => {
  switch (action.type) {
    case constant.SETROBO:
      return action.payload;
    case constant.ADDROBO:
      return [...state, action.payload];
    case constant.DELETEROBO:
      const newarr = state.filter((i) => {
        return i.name !== action.payload;
      });
      return newarr;
    default:
      return state;
  }
};
