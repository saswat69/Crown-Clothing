import React, { Component } from "react";
import Button from "../Custom-button/Button";
import Forminput from "../Form-input/Forminput";
import "./Signin.scss";
import {
  auth,
  createUserProfile,
  singninwithGoogle,
} from "../../Firebase/Firebase";
class Signin extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }
  submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { user } = await auth.signInWithEmailAndPassword(
        this.state.email,
        this.state.password
      );
      await createUserProfile(user);
    } catch (error) {
      console.log(error.message);
    }
    this.setState({
      email: "",
      password: "",
    });
  };
  emailHandler = (e) => {
    const a = e.target.value;
    this.setState({
      email: a,
    });
  };
  passwordHandler = (e) => {
    const b = e.target.value;
    this.setState({
      password: b,
    });
  };
  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.submitHandler}>
          <Forminput
            name="email"
            type="email"
            value={this.state.email}
            required
            label={"email"}
            onChange={this.emailHandler}
          />

          <Forminput
            name="password"
            type="password"
            value={this.state.password}
            required
            label={"password"}
            onChange={this.passwordHandler}
          />
          <div className="buttons">
            <Button type="submit" value="submit form">
              Submit
            </Button>
            <Button onClick={singninwithGoogle} isgoogle>
              Sign in with Google
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default Signin;
