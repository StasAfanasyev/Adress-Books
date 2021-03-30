import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "./DescriptionPerson.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchPersonDescr } from "../../redux/actions/fullPerson";


export default function DescriptionPerson() {

  const { id } = useParams();

  const dispatch = useDispatch();
  const person = useSelector(state => state.people.fullPerson);

  React.useEffect(() => dispatch(fetchPersonDescr(id)), []);

  return (
    person &&
    <div className="main">
      <div className="user-photo">
        <div className="user-photo-img">
          <img className="user-photo-img" src={person.image} alt="" />
        </div>
        <div className="name">${person.nameEng}</div>
        <div className="mr">${person.nameRus}</div>
        <div>
          <button className="user-btn">ID ${person.id}</button>
          <button className="user-btn">Bussiness card</button>
        </div>
      </div>
      <div className="user-descr">
        <div className="indfo">
          GENERAL INFO
    </div>
        <div className="descr">
          <div className="info-1">
            <p>Department</p>
            <p>Room</p>
          </div>
          <div className="info-2">
            <p>${person.profession}</p>
            <p>${person.office}</p>
          </div>
        </div>
        <div className="indfo">
          CONTACTS
      </div>
        <div className="descr">
          <div className="info-1">
            <p>Mobile phone</p>
            <p>Email</p>
            <p>Skype ID</p>
          </div>
          <div className="info-2">
            <p>${person.mobile}</p>
            <p><a href="#">${person.email}</a></p>
            <p><a href="#">${person.skype}</a></p>
          </div>
        </div>
        <div className="indfo">
          PROFILE
      </div>
        <div className="descr">
          <div className="info-1">
            <p>Hire date</p>
            <p>status</p>
          </div>
          <div className="info-2">
            <p>${person.hireDate}</p>
            <p>${person.status}</p>
          </div>
        </div>
        <button className="btn btn-back"><Link to="/adressbooks">&#8617;</Link></button>
      </div>
    </div>
  )
}


