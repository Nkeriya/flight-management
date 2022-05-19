import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Airline from "./Airline/Airline";
import Airlines from "./Airlines/Airlines";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Airlines />} />
          <Route exact path="/airline/:slug" element={<Airline />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
