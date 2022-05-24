import React from "react";

export default function Header(props) {
  const { name, logo_url, avg_score } = props.attributes;
  const total = props.reviews.length;
  return (
    <div className="container text-left">
      <div style={{ width: "200px", height: "200px" }}>
        <img src={logo_url} style={{ height: "100%", width: "100%" }} />
      </div>
      <h1>{name}</h1>
      <div>
        <div>{total} User reviews</div>
        <div>star rating</div>
        <div className="text-bold">{avg_score} out of 5</div>
      </div>
    </div>
  );
}
