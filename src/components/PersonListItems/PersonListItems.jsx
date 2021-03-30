import React from "react";
import "./PersonListItems.css";
import { NavLink } from "react-router-dom";

export default function PersonListItems({image,nameEng,nameRus,office,profession, id}) {
  return (
    <>
    <img className="your_image" src={image} alt="" />
    <div className="nameEng">{nameEng}</div>
    <div className="nameRus">{nameRus}</div>
    <div className="office">{office}</div>
    <div className="profession">{profession}</div>
    <div className="btn-desc"><NavLink to={`/description/${id}`}>click</NavLink></div>
  </>
  )
}





