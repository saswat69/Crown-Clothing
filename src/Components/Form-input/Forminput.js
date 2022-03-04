import React from "react";
import "./Forminput.scss";

function Forminput({ handlechange, label, ...otherProps }) {
  return (
    <div className="group">
      <input className="form-input" onChange={handlechange} {...otherProps} />
      {label ? (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
}

export default Forminput;
