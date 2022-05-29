import React from "react";
import { Link } from "react-router-dom";

export default function Airline(props) {
  return (
    <div style={{ width: '300px', height: '300px', paddingTop: '20px'}}>
      <div className=" card">
        <div>
          <img
            style={{
              width: "100px",
              height: "100px",
              marginTop: '15px',
              borderRadius: "50%",
            }}
            className="card-img-top"
            src={props.attributes.logo_url}
            alt={props.attributes.name}
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">{props.attributes.name}</h5>
          <p className="card-text">Score: {props.attributes.avg_score}</p>
          <Link
            to={`/airlines/${props.attributes.slug}`}
            className="btn btn-outline-secondary"
          >
            View Airline
          </Link>
        </div>
      </div>
    </div>
  );
}
