import React from "react";
import { Link } from "react-router-dom";
import "./header.css";



export default function Header({ user, image }) {

  const userNav = !user
    ? <ul className="header-nav">
        <li className="nav-btn">
          <Link to="/signin">Sign In</Link>
        </li>
        <li className="nav-btn">
          <Link to="/signup">Sign Up</Link>
        </li>
      </ul>
    : 
      <div className="nav-person">
        <img className="nav-person-img" src={image} alt=""></img>
        <div className="nav-person-text">{user}</div>
        <a className="nav-person-text" onClick={() => document.location.reload(localStorage.clear())}><Link to="/">Log out</Link></a> 
      </div>

  return (
    <div className="header">
      <h3>
        <Link to="/adressbooks">LeverX Group</Link>
      </h3>
      <ul className="header-nav">
        <li className="nav-btn">
          <Link to="/adressbooks">Adress Books</Link>
        </li>
        <li className="nav-btn">
          <Link to="/requests">Leave Requests</Link>
        </li>
        <li className="nav-btn">
          <Link to="/settings">Settings</Link>
        </li>
      </ul>
      {userNav}
    </div>
  )
}

