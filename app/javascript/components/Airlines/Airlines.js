import React, { useState, useEffect } from "react";
import axios from "axios";
import Airline from "./Airline";

export default function Airlines() {
  const [airlines, setAirlines] = useState([]);

  useEffect(() => {
    // Get all of our airline from api
    // update airlines in our state

    axios
      .get("/api/v1/airlines.json")
      .then((resp) => {
        setAirlines(resp.data.data);
      })
      .catch((resp) => console.log(resp));
  }, [airlines.length]);

  const list = airlines.map((item) => {
    return <Airline key={item.attributes.name} attributes={item.attributes} />;
  });
  return (
    <div className="container text-center">
      <div>
        <h1>Flight Management</h1>
      </div>
      <div>
        <h4>Airline reviews</h4>
      </div>
      <div className="row my-5" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>{list}</div>
    </div>
  );
}
