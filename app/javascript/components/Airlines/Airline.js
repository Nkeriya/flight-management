import React from "react";
import { Link } from "react-router-dom";

export default function Airline(props) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src="..." className="card-img-top" alt={props.attributes.name} />
      <div className="card-body">
        <h5 className="card-title">{props.attributes.name}</h5>
        <p className="card-text">Score: {props.attributes.avg_score}</p>
        <Link
          to={`/airlines/${props.attributes.slug}`}
          className="btn btn-outline-dark"
        >
          View Airline
        </Link>
      </div>
    </div>
  );
}