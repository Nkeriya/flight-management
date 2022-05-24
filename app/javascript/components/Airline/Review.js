import React from "react";
import Rating from "../Rating/Rating";

export default function Review(props) {
  const { score, title, description } = props.attributes;

  return (
    <div className="card" style={{ width: "18rem", margin: "10px" }}>
      <div className="card-body">
        <div style={{ display: "flex", flexDirection: "row" }}>
          {score ? score : 1}
          <Rating score={score ? score : 1} />
        </div>
        <h6 className="card-subtitle mb-2">{title}</h6>
        <p className="card-text">{description}</p>
        <div className="text-center">
          <button
            id={props.id}
            onClick={props.deleteHandler}
            className="btn btn-sm btn-outline-danger"
            style={{ margin: "0px 10px" }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
