import React, { Component } from "react";
import { connect } from "react-redux";
import { Control, Errors, Form, actions } from "react-redux-form";
import { Button, FormGroup, Label, Col } from "reactstrap";

const required = (val) => val && val.length;
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) =>
  /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(val);

const mapDispatchToProps = (dispatch) => {
  return {
    resetFeedback: () => {
      dispatch(actions.reset("feedback"));
    },
  };
};
class Contact extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     firstName: "",
  //     lastName: "",
  //     phone: "",
  //     email: "",
  //     agree: true,
  //     contactType: "phone",
  //     message: "",
  //   };
  // }
  // onChangeHandler = (event) => {
  //   const value =
  //     event.target.type === "checkbox"
  //       ? event.target.checked
  //       : event.target.value;
  //   const name = event.target.name;
  //   this.setState({
  //     [name]: value,
  //   });
  // };

  onSubmitHandler = (value) => {
    console.log(value);
    this.props.resetFeedback();
  };
  render() {
    document.title = "Contact";
    return (
      <div className="container">
        <div
          className="row row-content"
          style={{ paddingLeft: "20px", textAlign: "left" }}
        >
          <div className="col-12">
            <h3>Send your feedback</h3>
          </div>
          <div className="col-12 col-md-7">
            <Form
              model="feedback"
              onSubmit={(value) => this.onSubmitHandler(value)}
            >
              <FormGroup row>
                <Label htmlFor="firstName" md={2}>
                  First Name
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".firstName"
                    name="firstName"
                    placeholder="First Name"
                    className="form-control"
                    validators={{ required }}
                  />
                  <Errors
                    className="text-danger"
                    model=".firstName"
                    show="touched"
                    messages={{ required: "required" }}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="lastName" md={2}>
                  Last Name
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".lastName"
                    name="lastName"
                    placeholder="Last Name"
                    className="form-control"
                    validators={{ required }}
                  />
                  <Errors
                    className="text-danger"
                    model=".lastName"
                    show="touched"
                    messages={{ required: "required" }}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="phone" md={2}>
                  Phone
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".phone"
                    name="phone"
                    placeholder="phone"
                    className="form-control"
                    validators={{ required, isNumber }}
                  />
                  <Errors
                    className="text-danger"
                    model=".phone"
                    show="touched"
                    messages={{
                      required: "required  ",
                      isNumber: "invalid Number",
                    }}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="email" md={2}>
                  email
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".email"
                    name="email"
                    placeholder="email"
                    className="form-control"
                    validators={{ required, validEmail }}
                  />
                  <Errors
                    className="text-danger"
                    model=".email"
                    show="touched"
                    messages={{
                      required: "required  ",
                      validEmail: "invalid Number",
                    }}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md={{ size: 6, offset: 2 }}>
                  <FormGroup check>
                    <Label check>
                      <Control.checkbox model=".agree" name="agree" />{" "}
                      <strong>May we contact you</strong>
                    </Label>
                  </FormGroup>
                </Col>
                <Col md={{ size: 3, offset: 1 }}>
                  <Control.select
                    model=".contactType"
                    name="contactType"
                    className="form-control"
                  >
                    <option>Phone</option>
                    <option>Email</option>
                  </Control.select>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="message" md={2}>
                  Your Feedback
                </Label>
                <Col md={10}>
                  <Control.textarea
                    model=".message"
                    name="message"
                    rows="12"
                    className="form-control"
                    validators={{ required }}
                  ></Control.textarea>
                  <Errors
                    className="text-danger"
                    model=".message"
                    show="touched"
                    messages={{ required: "required" }}
                  />
                </Col>
              </FormGroup>
              <FormGroup>
                <Col md={{ size: 10, offset: 2 }}>
                  <Button type="submit" color="primary">
                    Send Feedback
                  </Button>
                </Col>
              </FormGroup>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(Contact);
