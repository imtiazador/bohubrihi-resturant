import { useState } from "react";
import MenuItem from "./MenuItem";
// import DISHES from "../../data/Dishes";
// import COMMENTS from "../../data/comments";
import DishDetails from "./DishDetails";
import { CardColumns, Modal } from "reactstrap";
import { connect } from "react-redux";
import * as actionType from "../../redux/actionTypes";

const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addComment: (dishId, rating, author, comment) =>
      dispatch({
        type: actionType.ADD_COMMENTS,
        payload: {
          dishId: dishId,
          author: author,
          comment: comment,
          rating: rating,
        },
      }),
  };
};
const Menu = (props) => {
  document.title = "Menu";
  // console.log(props.addComment);
  const dishes = props.dishes;
  const comment = props.comments;
  const [selectedDish, setSelectedDish] = useState(null);
  const [isModal, setIsModal] = useState(false);
  // console.log(comment);
  const onSelectedDish = (dish) => {
    setSelectedDish(dish);
    toggleModal();
  };
  const toggleModal = () => {
    setIsModal(!isModal);
  };
  const menu = dishes.map((dish) => {
    return (
      <MenuItem key={dish.id} dish={dish} onSelectedDish={onSelectedDish} />
    );
  });
  const comments = selectedDish
    ? comment.filter((comment) => {
        return comment.dishId === selectedDish.id;
      })
    : null;
  const dishDetails = selectedDish ? (
    <DishDetails
      dish={selectedDish}
      comment={comments}
      addComment={props.addComment}
    />
  ) : null;
  return (
    <div className="container">
      <div className="row">
        <CardColumns>{menu}</CardColumns>
        <Modal isOpen={isModal} toggle={toggleModal}>
          {dishDetails}
        </Modal>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
