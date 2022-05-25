import React, { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "./Header";
import ReviewForm from "./ReviewForm";
import Review from "./Review";

export default function Airline(props) {
  const [airline, setAirline] = useState({});
  const [review, setReview] = useState({});
  const { slug } = useParams();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const url = `/api/v1/airlines/${slug}`;

    axios
      .get(url)
      .then((resp) => {
        setAirline(resp.data);
        setLoaded(true);
      })
      .catch((resp) => console.log(resp));
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    setReview(Object.assign({}, review, { [e.target.name]: e.target.value }));
    // console.log("review", review);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const csrfToken = document.querySelector("[name=csrf-token]").content;
    axios.defaults.headers.common["X-CSRF-TOKEN"] = csrfToken;

    const airline_id = airline.data.id;
    axios
      .post("/api/v1/reviews", { review, airline_id })
      .then((resp) => {
        const included = [...airline.included, resp.data.data];
        setAirline({ ...airline, included });
        setReview({ title: "", description: "", score: 0 });

        let elements =
          document.getElementsByClassName("react-stars")[0].children;
        for (let i = 0; i < elements.length; i++) {
          elements[i].style.color = "grey";
        }
      })
      .catch((resp) => {
        console.log(resp);
      });
  };

  const setRating = (score) => {
    setReview({ ...review, score });
  };

  const deleteHandler = (e) => {
    let review_id = e.target.id;

    axios
      .delete(`/api/v1/reviews/${review_id}`)
      .then((resp) => {
        const included = airline.included.filter((o) => {
          return o.id !== review_id;
        });
        setAirline({ data: airline.data, included: included });
      })
      .catch((resp) => {
        console.log(resp);
      });
  };

  let reviews;
  if (loaded && airline.included) {
    reviews = airline.included.map((item, index) => {
      return (
        <Review
          key={index}
          attributes={item.attributes}
          id={item.id}
          deleteHandler={deleteHandler}
        />
      );
    });
  }

  return (
    <div className="row">
      {loaded && (
        <Fragment>
          <div className="col-md-7" style={{ padding: "0px 150px" }}>
            <Header
              attributes={airline.data.attributes}
              reviews={airline.included}
            />

            <div style={{ marginTop: "30px" }}>{reviews}</div>
          </div>
          <div
            className="col-md-5"
            style={{
              backgroundColor: "#6c757db8",
              padding: "0px 150px",
              minHeight: "94vh",
            }}
          >
            <ReviewForm
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              setRating={setRating}
              attributes={airline.data.attributes}
              review={review}
            />
          </div>
        </Fragment>
      )}
    </div>
  );
}
