import React, { Fragment } from "react";
import ReactStars from "react-rating-stars-component";

export default function ReviewForm(props) {
  return (
    <div className="container text-center" style={{ marginTop: "50px" }}>
      <form onSubmit={props.handleSubmit}>
        <div>
          <h3>
            Have an experience with {props.review.name}? share your review{" "}
          </h3>
        </div>
        <div>
          <div className="mb-3 mt-3">
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
              onChange={props.handleChange}
              value={props.review.title}
              name="title"
            />
          </div>
          <div className="mb-3">
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              placeholder="description"
              rows={3}
              defaultValue={""}
              onChange={props.handleChange}
              value={props.review.description}
              name="description"
            />
          </div>
          <div style={{ border: "1px solid black", padding: "10px 0px" }}>
            <h3>Rate this airline</h3>
            <div className="ms-5">
              <ReactStars
                className="react-stars mt-5"
                count={5}
                onChange={props.setRating}
                size={60}
                emptyIcon={<i className="far fa-star"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#ffd700"
              />
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-outline-dark" style={{width: '100%', margin: '15px 0px'}}>
          Submit your review
        </button>
      </form>
    </div>
  );
}
