import React from "react";
import { withRouter } from "react-router-dom";
import "./Menu-item.scss";
const Menuitem = ({ title, imageUrl, size, linkUrl, match, history }) => {
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>

      <div className="content">
        <h1 className="title">
          {title.slice(0, 1).toUpperCase() + title.slice(1)}
        </h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};
export default withRouter(Menuitem);
