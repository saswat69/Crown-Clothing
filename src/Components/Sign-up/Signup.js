import "./Signup.scss";
import React from "react";
import Forminput from "../Form-input/Forminput";
import Button from "../Custom-button/Button";
import { auth } from "../../Firebase/Firebase";
import { createUserProfile } from "../../Firebase/Firebase";

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmpassword: "",
    };
  }
  handlesubmit = (e) => {
    e.preventDefault();
    const { displayName, email, password, confirmpassword } = this.state;

    if (password !== confirmpassword) return;

    try {
      const { user } = auth.createUserWithEmailAndPassword(email, password);
      createUserProfile(user, { displayName });
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmpassword: "",
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  namechangeHandler = (e) => {
    e.preventDefault();
    const a = e.target.value;
    this.setState({ displayName: a });
  };
  emailchangeHandler = (e) => {
    e.preventDefault();
    const b = e.target.value;
    this.setState({ email: b });
  };
  passwordchangeHandler = (e) => {
    e.preventDefault();
    const c = e.target.value;
    this.setState({ password: c });
  };
  confirmHandler = (e) => {
    e.preventDefault();
    const d = e.target.value;
    this.setState({ confirmpassword: d });
  };
  render() {
    const { displayName, email, password, confirmpassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">Do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form">
          <Forminput
            type="text"
            name="displayName"
            value={displayName}
            label="Displayname"
            onChange={this.namechangeHandler}
            required
          />
          <Forminput
            type="email"
            name="email"
            value={email}
            label="Email"
            onChange={this.emailchangeHandler}
            required
          />
          <Forminput
            type="password"
            name="password"
            value={password}
            label="Enter Password"
            onChange={this.passwordchangeHandler}
            required
          />
          <Forminput
            type="password"
            name="password"
            value={confirmpassword}
            label="Confirm Password"
            onChange={this.confirmHandler}
            required
          />
        </form>
        <Button type="submit" onClick={this.handlesubmit}>
          SIGN UP
        </Button>
      </div>
    );
  }
}
export default Signup;
