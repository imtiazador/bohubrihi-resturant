import React, { Component } from "react";
import { Button, Form, Label, Input } from "reactstrap";

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: "",
      comment: "",
      rating: "",
    };
  }
  onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  };
  onSubmitHandler = (event) => {
    this.props.addComment(
      this.props.dishId,
      this.state.rating,
      this.state.author,
      this.state.comment
    );

    this.setState({
      author: "",
      comment: "",
      rating: "",
    });
    event.preventDefault();
  };
  render() {
    // console.log(this.props);
    return (
      <div>
        <Form onSubmit={this.onSubmitHandler}>
          <Label>Name:</Label>
          <br />
          <Input
            type="text"
            name="author"
            value={this.state.author}
            onChange={this.onChangeHandler}
            required
          ></Input>
          <Label>rating:</Label>
          <br />
          <Input
            type="select"
            name="rating"
            value={this.state.rating}
            onChange={this.onChangeHandler}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
          <Label>Your Feedback</Label>
          <Input
            type="textarea"
            name="comment"
            value={this.state.comment}
            onChange={this.onChangeHandler}
            rows="12"
          ></Input>
          <Button type="submit" color="primary">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default CommentForm;
