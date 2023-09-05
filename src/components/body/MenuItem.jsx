import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";
const MenuItem = ({ dish, onSelectedDish }) => {
  return (
    <div>
      <Card
        inverse
        style={{ padding: 10, margin: 10, cursor: "pointer" }}
        onClick={() => onSelectedDish(dish)}
      >
        <CardImg
          alt="Card image cap"
          src={dish.image}
          style={{
            height: "100%",
            opacity: 0.5,
          }}
          width="100%"
        />
        <CardImgOverlay>
          <CardTitle
            tag="h5"
            style={{ fontSize: 25, fontWeight: "bold", color: "black" }}
          >
            {dish.name}
          </CardTitle>
        </CardImgOverlay>
      </Card>
    </div>
  );
};

export default MenuItem;
