// import React from "react";
import { NavLink } from "react-router-dom";

function HomeComponent() {
  return (
    <div className="flex home-container flex-col gap-y-7">
      <h1>Quiz App</h1>
      <NavLink to="/Quiz">
        <button className="font-bold">Play</button>
      </NavLink>
    </div>
  );
}

export default HomeComponent;
