import React from "react";

export default function Header(props) {
  const { name, logo_url, avg_score } = props.attributes;
  const total = props.reviews.length;
  return (
    <div className="container text-left">
      <h1>
        <img src={logo_url} />
        {name}
      </h1>
      <div>
        <div>{total} User reviews</div>
        <div>star rating</div>
        <div className="text-bold">{avg_score} out of 5</div>
      </div>
    </div>
  );
}
