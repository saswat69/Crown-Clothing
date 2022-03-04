import React from "react";
import "./Button.scss";
function Button({ children, isgoogle, ...otherprops }) {
  return (
    <div>
      <button
        className={isgoogle ? "google-sign-in custom-button" : "custom-button"}
        {...otherprops}
      >
        {children}
      </button>
    </div>
  );
}

export default Button;
