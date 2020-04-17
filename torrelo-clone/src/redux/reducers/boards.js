import { ADD_BOARD } from "../actionTypes";
import uuid from "react-uuid";

const initState = {
  boards: JSON.parse(localStorage.getItem("boards")),
};

export default function (state = initState, action) {
  console.log("2: reducers");

  switch (action.type) {
    case ADD_BOARD: {
      const { title } = action.payload;
      const list = [...state.boards, { title: title, id: uuid() }];
      localStorage.setItem("boards", JSON.stringify(list));

      return {
        boards: list,
      };
    }
    default:
      return state;
  }
}
