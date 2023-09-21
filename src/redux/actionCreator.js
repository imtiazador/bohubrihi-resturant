import * as actionType from "./actionTypes";
export const addComment = (dishId, rating, author, comment) => {
  return {
    type: actionType.ADD_COMMENTS,
    payload: {
      dishId: dishId,
      author: author,
      comment: comment,
      rating: rating,
    },
  };
};
