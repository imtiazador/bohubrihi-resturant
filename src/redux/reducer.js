import { combineReducers } from "redux";
import DISHES from "../data/Dishes";
import COMMENTS from "../data/comments";
import * as actionType from "./actionTypes";

const dishReducer = (dishState = DISHES, action) => {
  switch (action.type) {
    default:
      return dishState;
  }
};
const commentReducer = (commentState = COMMENTS, action) => {
  switch (action.type) {
    case actionType.ADD_COMMENTS:
      let comment = action.payload;
      comment.id = commentState.length;
      comment.date = new Date().toDateString();
      console.log(comment);
      return commentState.concat(comment);
    default:
      return commentState;
  }
  // if (action.type === actionType.ADD_COMMENTS) {
  //   let comment = action.payload;
  //   comment.id = commentState.length;
  //   comment.date = new Date().toDateString();
  //   console.log(comment);
  //   return commentState.concat(comment);
  // }
  // return commentState;
};

export const Reducer = combineReducers({
  dishes: dishReducer,
  comments: commentReducer,
});
