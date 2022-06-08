import React from "react";
// import './Rating.css'

export default function Rating(props) {
  // const score = (props.score?props.score/5:1) * 100

  return (
    <span className="">
      <i className="fa fa-star" style={{ color: "red" }}></i>
    </span>
  );
  // style={{width: `${score}%`}}
}
