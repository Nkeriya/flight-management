import React from "react";
import { Link } from "react-router-dom";

export default function Airline(props) {
  return (
    <div style={{ width: "300px", height: "300px", paddingTop: "20px" }}>
      <div className=" card">
        <div>
          <img
            style={{
              width: "100px",
              height: "100px",
              marginTop: "15px",
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
          <div className="d-flex justify-content-between align-items-center mb-2">
            <div className="col-11">
              <Link
                to={`/airlines/${props.attributes.slug}`}
                className="btn btn-outline-secondary"
              >
                View Airline
              </Link>
            </div>

            <div className="col-1">
              <div className="dropdown">
                <a
                  href={void 0}
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fa fa-2x fa-ellipsis-v" aria-hidden="true"></i>
                </a>
                <div className="dropdown-menu dropdown-menu-end">
                  <a href={void 0} className="dropdown-item">
                    Edit
                  </a>
                  <a
                    href={void 0}
                    onClick={props.deleteHandler}
                    data-slug={props.attributes.slug}
                    className="dropdown-item"
                  >
                    Delete
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
