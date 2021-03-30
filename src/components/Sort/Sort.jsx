import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Sort.css";
import { setSort } from './../../redux/actions/sort';



const buttons = [
  { label: "Sort asc", id: 1 },
  { label: "Sort desc", id: 2 }
]

function Sort() {
  const dispatch = useDispatch()

  const onHundleChange = (label) => {
    dispatch(setSort(label))
  }

  const button = buttons.map(({ label, id }) => {
    return (
      <div key={id}>
        <input
          onClick={() => onHundleChange(label)}
          type="radio"
          name="radio" />
        <label >{label}</label>
      </div>
    )
  })

  return (
    <div className="sort">
      {button}
    </div>
  )
}

export default Sort



