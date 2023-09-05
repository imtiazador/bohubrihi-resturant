import { useState } from "react";
import MenuItem from "./MenuItem";
import DISHES from "../../data/Dishes";
import DishDetails from "./DishDetails";

const Menu = () => {
  const [dishes] = useState(DISHES);
  const [selectedDish, setSelectedDish] = useState(null);
  const onSelectedDish = (dish) => {
    setSelectedDish(dish);
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
        <div className="col-5">{menu}</div>
        <div className="col-7">{dishDetails}</div>
      </div>
    </div>
  );
};

export default Menu;
