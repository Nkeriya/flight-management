import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Airline from "./Airline/Airline";
import Airlines from "./Airlines/Airlines";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import NewAirline from "./Airlines/New";

export default function App() {
  return (
    <div style={{ overflowX: "hidden" }}>
      <BrowserRouter>
        <Navbar />
        <div style={{ marginTop: "80px" }}>
          <Routes>
            <Route exact path="/" element={<Airlines />} />
            <Route exact path="/airlines/:slug" element={<Airline />} />
            <Route exact path="/airlines/new" element={<NewAirline />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}
