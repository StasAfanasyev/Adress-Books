import React from "react";
import { Link } from "react-router-dom";
import "./Info.css";


export default function Info() {
  return (
    <div className="info">
      <h1 className="info-header">To view the information, you must be logged in</h1>
      <div className="info-container">
        <div className="info-link">
          <Link to="/signin">Sign In</Link>
        </div>
        <div className="info-link">
          <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </div>


  )
}
