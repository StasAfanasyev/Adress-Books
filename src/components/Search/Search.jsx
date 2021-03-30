import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/actions/filter';
import './Search.css';



export default function Search() {
  const filter = useSelector(state => state.filter.filterby);
  const dispath = useDispatch();

  const onHundleChange = (e) => {
    dispath(setFilter(e.target.value))
  }

  return (
    <input
      className="form-input"
      type="text"
      placeholder="search..."
      value={filter}
      onChange={onHundleChange}
    />
  )
}




