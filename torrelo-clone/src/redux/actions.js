import { ADD_BOARD } from "./actionTypes";

export const addBoard = (title) => ({
  type: ADD_BOARD,
  payload: {
    title: title,
  },
});
