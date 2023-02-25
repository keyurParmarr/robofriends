import { constant } from "./constant";

export const fetchRobo = () => {
  return async (dispatch) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    dispatch({
      type: constant.SETROBO,
      payload: data,
    });
  };
};
