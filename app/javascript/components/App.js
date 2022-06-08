import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Airline from "./Airline/Airline";
import Airlines from "./Airlines/Airlines";
import 'jquery';
import '@popperjs/core';
import 'bootstrap/dist/js/bootstrap.bundle';
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import Navbar from "./Navbar";
import NewAirline from "./Airlines/New";
import EditAirline from "./Airlines/EditAirline";

export default function App() {
  return (
    <div style={{ overflowX: "hidden" }}>
      <BrowserRouter>
        <Navbar />
        <div style={{ marginTop: "55px" }}>
          <Routes>
            <Route exact path="/" element={<Airlines />} />
            <Route exact path="/airlines/:slug" element={<Airline />} />
            <Route exact path="/airlines/new" element={<NewAirline />} />
            <Route exact path="/airlines/edit" element={<EditAirline />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}
