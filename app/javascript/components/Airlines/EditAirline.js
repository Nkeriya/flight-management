import React from 'react'

export default function EditAirline() {
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
    <div style={{marginTop: '100px'}}>
      <h1>Edit Airline</h1>
    </div>
  )
}
