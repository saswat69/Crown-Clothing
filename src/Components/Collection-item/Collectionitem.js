import React from "react";
import "./Collectionitem.scss";
function Collectionitem({ id, imageUrl, name, price }) {
  return (
    <div key={id} className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
    </div>
  );
}
export default Collectionitem;
