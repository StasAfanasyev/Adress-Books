import React from "react";
import "./FormSignUp.css";

export default function FormSignUp({ addPeople }) {
  return (
    <div className="container-form">
      <form onSubmit={addPeople}>
        <input name="login" type="text" className="form-input" />
        <input name="password" type="text" className="form-input" />
        <button className="form-btn">регистрация</button>
      </form>
    </div>
  )
}



