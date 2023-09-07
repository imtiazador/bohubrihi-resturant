import { useState } from "react";
import MenuItem from "./MenuItem";
import DISHES from "../../data/Dishes";
import COMMENTS from "../../data/comments";
import DishDetails from "./DishDetails";
import { CardColumns, Modal } from "reactstrap";

const Menu = () => {
  document.title = "Menu";
  const [dishes] = useState(DISHES);
  const [comment] = useState(COMMENTS);
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
    <DishDetails dish={selectedDish} comment={comments} />
  ) : null;
  return (
    <div className="container">
      <div className="row">
        <CardColumns>{menu}</CardColumns>
        <Modal isOpen={isModal} onClick={toggleModal} toggle={toggleModal}>
          {dishDetails}
        </Modal>
      </div>
    </div>
  );
};

export default Menu;
