import React from "react";
import "./Settings.css";

export default function Settings({people}) {

  const newPeople = people && people.map(el => {
    return (
      <div key={el.id} className="settings-person">
      <div className="settings-person-img">
        <img className="img" src={el.image} alt="" />
        <div className="settings-person-img-name">
          <p>{el.nameEng}</p>
          <p>{el.nameRus}</p>
        </div>
      </div>
      <div className="button-book-role">
        {el.role === "editor" ? <button className="btn blue">hr</button> : <button className="btn">hr</button>}
        {el.role === "user" ? <button className="btn blue">user</button> : <button className="btn">user</button>}
      </div>
      <div className="button-vacation-role">
        <button className="btn">employee</button>
        <button className="btn">po</button>
        <button className="btn">dd</button>
      </div>
      <div className="button-admin-role">
        {el.role === "admin" ? <button className="btn blue">Admin</button> : <button className="btn">Admin</button>}
      </div>
    </div>
    )
  })

  return (
    <div className="settings">
      <h1 className="settings-header">ROLES & Permissions</h1>
      <div className="settings-nav">
        <input type="text" placeholder="type to search" />
        <div>Adress book role</div>
        <div>Vacation role</div>
        <div>Admin</div>
      </div>
      {newPeople}
    </div>
  )
}
