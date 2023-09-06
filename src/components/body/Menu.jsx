import { useState } from "react";
import MenuItem from "./MenuItem";
import DISHES from "../../data/Dishes";
import DishDetails from "./DishDetails";
import { CardColumns, Modal } from "reactstrap";

const Menu = () => {
  const [dishes] = useState(DISHES);
  const [selectedDish, setSelectedDish] = useState(null);
  const [isModal, setIsModal] = useState(false);
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
  const dishDetails = selectedDish ? <DishDetails dish={selectedDish} /> : null;
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
