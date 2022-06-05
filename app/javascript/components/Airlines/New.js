import React, { useState } from "react";
import axios from "axios";
import { ImagePicker } from "react-file-picker";

export default function New() {
  const [airline, setAirline] = useState({
    name: "",
    image: "",
  });

  const nameChangeHandler = (e) => {
    e.preventDefault();
    setAirline({ name: e.target.value, image: airline?.image });
    // console.log("airline", airline);
  };

  const imageChangeHandler = (base64Image) => {
    setAirline({ name: airline?.name, image: base64Image });
    // console.log("airline", airline);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const csrfToken = document.querySelector("[name=csrf-token]").content;
    axios.defaults.headers.common["X-CSRF-TOKEN"] = csrfToken;

    axios
      .post("/api/v1/airlines", { airline })
      .then((resp) => {
        setAirline({ name: "", image: "" });
        if (resp.status == 200){
          window.location = "/"
        }
      })
      .catch((resp) => {
        console.log(resp);
      });
  };

  return (
    <form className="container g-3" onSubmit={handleSubmit}>
      <div className="row mb-4">
        <div className="col-auto">
          <label htmlFor="airline-name" className="col-form-label">
            Airline name:{" "}
          </label>
        </div>
        <div className="col-auto">
          <input
            type="text"
            id="airline-name"
            name="name"
            onChange={nameChangeHandler}
            className="form-control"
            aria-describedby="passwordHelpInline"
          />
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-auto">
          <ImagePicker
            extensions={["jpg", "jpeg", "png"]}
            dims={{
              minWidth: 100,
              maxWidth: "100%",
              minHeight: 100,
              maxHeight: "100%",
            }}
            onChange={(base64) => imageChangeHandler(base64)}
            onError={(errMsg) => console.log(errMsg)}
          >
            <button type="button" className="btn">
              <i className="fa fa-3x fa-upload" aria-hidden="true"></i>
            </button>
          </ImagePicker>
        </div>
        <div className="col-auto">
          <label htmlFor="airline-image" className="col-form-label">
            Upload Airline Image
          </label>
        </div>
      </div>

      <button type="submit" className="btn btn-outline-dark">
        Submit
      </button>
    </form>
  );
}

// Object.assign({}, airline, {
//   [e.target.name]:
//     e.target.name === "name" ? e.target.value : e.target.files[0],
// })
