import React from "react";
import Collectionitem from "../Collection-item/Collectionitem";
import "./Preview-Collection.scss";

function PreviewCollection({ id, title, items }) {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((el, i) => i < 4)
          .map((el) => {
            return (
              <Collectionitem
                id={el.id}
                imageUrl={el.imageUrl}
                name={el.name}
                price={el.price}
              />
            );
          })}
      </div>
    </div>
  );
}

export default PreviewCollection;
