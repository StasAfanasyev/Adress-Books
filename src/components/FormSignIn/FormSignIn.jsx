import React from "react";
import "./FormSignIn.css";


export default function FormSignIn({getPerson}) {
    return (
      <div className="container-form">
        <form onSubmit={getPerson}>
          <input name="login" type="text" className="form-input"/>
          <input name="password" type="text" className="form-input"/>
          <button className="form-btn">авторизация</button>
        </form>
      </div>
  )
}



