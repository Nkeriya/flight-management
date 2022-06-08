import React, { useState, useEffect } from "react";
import axios from "axios";
import Airline from "./Airline";

export default function Airlines() {
  const [airlines, setAirlines] = useState([]);

  const reset_airline = ()=> {
    axios
      .get("/api/v1/airlines.json")
      .then((resp) => {
        setAirlines(resp.data.data);
      })
      .catch((resp) => console.log(resp));
  }

  useEffect(() => {
    // Get all of our airline from api
    // update airlines in our state
    reset_airline();

  }, [airlines.length]);

  const deleteHandler = (e) => {
    let airline_slug = e.target.dataset.slug;
    // debugger
    axios
      .delete(`/api/v1/airlines/${e.target.dataset.slug}`)
      .then((resp) => {
        if (resp.status == 204) {
          // debugger
          reset_airline();
        }
      })
      .catch((resp) => {
        console.log('log');
      });
  };

  let list = airlines.map((item, index) => {
    return (
      <Airline
        key={index}
        attributes={item.attributes}
        id={item.id}
        deleteHandler={deleteHandler}
      />
    );
  });

  return (
    <div className="container text-center" style={{marginTop: '100px'}}>
      <div>
        <h1>Flight Management</h1>
      </div>
      <div>
        <h4>Airline reviews</h4>
      </div>
      <div
        className="row my-5"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {list}
      </div>
    </div>
  );
}
