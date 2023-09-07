import { Card, CardImg, CardBody, CardText, CardTitle } from "reactstrap";
import LoadComment from "./LoadComment";
const DishDetails = ({ dish, comment }) => {
  return (
    <div>
      <Card className="my-2">
        <CardImg
          alt="Card image cap"
          src={dish.image}
          style={{
            height: "100%",
          }}
          top
          width="100%"
        />
        <CardBody style={{ textAlign: "left" }}>
          <CardTitle tag="h5">{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
          <CardText>price: {dish.price}/-</CardText>
          <hr />
          <LoadComment comment={comment} />
        </CardBody>
      </Card>
    </div>
  );
};

export default DishDetails;
