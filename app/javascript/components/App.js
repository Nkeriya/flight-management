import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Airline from "./Airline/Airline";
import Airlines from "./Airlines/Airlines";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Airlines/>}/>
          <Route
            exact
            path="/airline/:slug"
            element={<Airline/>}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
