import React from "react";
import PersonListItems from "../PersonListItems/PersonListItems";
import "./PersonList.css";

function PersonList({ people }) {

  const person = people && people.map(person => {
    return (
      <li key={person.id} className="card squares">
        <PersonListItems {...person} />
      </li>
    )
  })

  return (
    <ul className="card-wrapper card-wrapper_squares container-ul">
      {person}
    </ul>
  )
}

export default PersonList;
