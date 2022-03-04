import React from "react";
import Signin from "../../Components/Sign-in/Signin";
import Signup from "../../Components/Sign-up/Signup";
import "./Sign.scss";

function Sign() {
  return (
    <div className="sign-in-and-sign-up">
      <Signin />
      <Signup />
    </div>
  );
}

export default Sign;
