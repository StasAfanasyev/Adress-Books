import React from "react";
import { useSelector } from "react-redux";
import PersonList from "../PersonList/PersonList";
import Search from "../Search/Search";
import Sort from "../Sort/Sort";
import "./Main.css";



export default function Main({ people }) {

  const filter = useSelector(state => state.filter.filterby)
  const sort = useSelector(state => state.filter.sortBy)

  function searchPeople(people, filter) {
    return (people && people.filter(person => person.nameEng.toLowerCase().includes(filter) || person.nameRus.toLowerCase().includes(filter)))
  }

  function sortItems(people, sort) {
    return (people && people.sort((prev, next) => prev.nameEng < next.nameEng ? sort === "Sort asc" ? -1 : 1 : sort === "Sort desc" ? -1 : 1))
  }


  const visiblePeople = sortItems(searchPeople(people, filter), sort);

  return (
    <div className="d-flex">
      <div>
        <Search/>
        <Sort/>
      </div>
      <PersonList people={visiblePeople} />
    </div>
  )
}
